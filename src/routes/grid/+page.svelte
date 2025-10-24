<script lang="ts">
  import { projects as initialProjects, siteContent } from '$lib/data';
  import { format, parseISO } from 'date-fns';
  import { onMount } from 'svelte';

  let projects = initialProjects;
  let expandedProject: number | null = null;
  let expandedLink: number | null = null;

  function formatDateRange(dateRange: string): string {
    let formattedDateRange;
    try {
      formattedDateRange = format(parseISO(dateRange), 'MMMM d, yyyy');
    } catch {
      formattedDateRange = dateRange;
    }
    return formattedDateRange;
  }

  function expandArticle(projectIndex: number, linkIndex: number) {
    expandedProject = projectIndex;
    expandedLink = linkIndex;
    
    // Scroll to expanded view after DOM update
    setTimeout(() => {
      const expandedElement = document.getElementById('expanded-view');
      if (expandedElement) {
        expandedElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  function closeExpanded() {
    expandedProject = null;
    expandedLink = null;
  }

  // Get all links from all projects for the grid
  $: allLinks = projects.flatMap((project, projectIndex) => 
    project.links.map((link, linkIndex) => ({
      ...link,
      projectIndex,
      linkIndex,
      projectTitle: project.title,
      projectSubhead: project.subhead
    }))
  );

  $: expandedData = expandedProject !== null && expandedLink !== null 
    ? projects[expandedProject]?.links[expandedLink] 
    : null;
</script>

<svelte:head>
  <title>Grid View - {siteContent.name}</title>
</svelte:head>

<main class="min-h-screen bg-white text-gray-900 font-sans">
  <!-- Header -->
  <section class="p-8 max-w-6xl mx-auto">
    <div class="mb-8 mt-6">
      <h1 class="text-4xl font-light mb-4">{siteContent.name}</h1>
      <p class="text-lg text-gray-600">
        {siteContent.tagline}
      </p>
    </div>

    <h2 class="text-2xl font-light mb-6 mt-4">Published Work</h2>
  </section>

  <!-- Grid Layout -->
  {#if expandedProject === null}
    <section class="px-8 max-w-6xl mx-auto">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {#each allLinks as link, index}
          <button
            class="group aspect-square overflow-hidden bg-gray-100 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            on:click={() => expandArticle(link.projectIndex, link.linkIndex)}
          >
            <div class="w-full h-full relative">
              <img 
                src={link.thumbnail} 
                alt={link.title}
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 relative z-10"
                loading="lazy"
                on:error={(e) => {
                  console.error('Failed to load image:', link.thumbnail);
                  e.target.style.display = 'none';
                }}
              />
              <!-- Fallback content if image fails -->
              <div class="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500 text-sm p-2 text-center z-0">
                <div>
                  <p class="font-medium">{link.title}</p>
                  <p class="text-xs mt-1">{formatDateRange(link.publicationDate)}</p>
                </div>
              </div>
              <!-- Overlay with title on hover -->
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-3">
                <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p class="text-sm font-light line-clamp-2">{link.title}</p>
                  <p class="text-xs text-gray-300 mt-1">{formatDateRange(link.publicationDate)}</p>
                </div>
              </div>
            </div>
          </button>
        {/each}
      </div>
    </section>
  {/if}

  <!-- Expanded Article View -->
  {#if expandedData}
    <section id="expanded-view" class="p-8 max-w-4xl mx-auto">
      <!-- Close button -->
      <div class="mb-6">
        <button
          on:click={closeExpanded}
          class="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to grid
        </button>
      </div>

      <!-- Article content -->
      <article class="space-y-6">
        <header class="space-y-4">
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <a
              href={expandedData.url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-3xl font-light text-gray-800 hover:text-gray-600 transition-colors underline hover:decoration-gray-600"
            >
              {expandedData.title}
            </a>
            <span class="text-sm text-gray-500 flex-shrink-0">
              {formatDateRange(expandedData.publicationDate)}
            </span>
          </div>
        </header>

        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Image -->
          <div class="lg:w-1/2">
            <div class="aspect-video overflow-hidden">
              <img 
                src={expandedData.thumbnail} 
                alt={expandedData.title}
                class="w-full h-full object-cover"
              />
            </div>
            <p class="text-xs font-light text-gray-400 mt-2">
              Source: {expandedData.source}
            </p>
          </div>

          <!-- Content -->
          <div class="lg:w-1/2 space-y-4">
            <p class="text-lg text-gray-700 leading-relaxed">
              {expandedData.description}
            </p>
            
            <div class="pt-4">
              <a
                href={expandedData.url}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-light hover:bg-gray-700 transition-colors"
              >
                Read full article
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  {/if}
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
