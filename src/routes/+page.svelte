<script lang="ts">
  import { projects as initialProjects, siteContent } from '$lib/data';
  import { format, parseISO } from 'date-fns';
  import { onMount } from 'svelte';

  let projects = initialProjects;
  let carousels: { [key: string]: HTMLElement } = {};

  onMount(() => {
    // Add scroll event listeners to all carousels
    Object.values(carousels).forEach(carousel => {
      if (carousel) {
        carousel.addEventListener('scroll', () => {
          const hasMore = carousel.scrollWidth > carousel.clientWidth + carousel.scrollLeft;
          carousel.classList.toggle('has-more', hasMore);
        });
        // Initial check
        const hasMore = carousel.scrollWidth > carousel.clientWidth + carousel.scrollLeft;
        carousel.classList.toggle('has-more', hasMore);
      }
    });
  });

  function toggle(index: number) {
    projects = projects.map((p, i) =>
      i === index ? { ...p, expanded: !p.expanded } : p
    );
  }

  function toggleAndScroll(index: number, linkId: string) {
    toggle(index);
    // Wait for the DOM to update before scrolling
    setTimeout(() => {
      const element = document.getElementById(linkId);
      if (element) {
        const offset = 75; // Add 100px offset from the top
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  }

  function formatDateRange(dateRange: string): string {
    let formattedDateRange;
    try {
      formattedDateRange = format(parseISO(dateRange), 'MMMM d, yyyy');
    } catch {
      formattedDateRange = dateRange;
    }
    return formattedDateRange;
  }
</script>

<main class="min-h-screen bg-white text-gray-900 font-sans p-8 max-w-3xl mx-auto">
  <section class="mb-8 mt-6">
    <h1 class="text-4xl font-light mb-4">{siteContent.name}</h1>
    <p class="text-lg text-gray-600">
      {siteContent.tagline}
    </p>
  </section>

  <section>
    <h2 class="text-2xl font-light mb-4 mt-4">Published Work</h2>
    {#each projects as project, index}
      <div class="mb-4 border-b border-gray-100 pb-4 last:border-b-0">
        {#if project.links.length === 1}
          <!-- Single link project - show link's title/description as header -->
          <div class="py-2">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <a 
                href={project.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-gray-600 transition-colors flex-1 sm:mr-4"
              >
                <h3 class="text-lg font-light text-gray-800">{project.links[0].title}</h3>
              </a>
              <span class="text-sm text-gray-500 flex-shrink-0 mt-2 sm:mt-0">{formatDateRange(project.links[0].publicationDate)}</span>
            </div>
            
            <!-- Inline thumbnail and subhead -->
            <div class="mt-4 flex flex-col sm:flex-row gap-4 sm:items-start">
              <a 
                href={project.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                class="block hover:opacity-90 transition-opacity flex-shrink-0"
              >
                <div class="w-full sm:w-32 h-48 sm:h-24">
                  <img 
                    src={project.links[0].thumbnail} 
                    alt={project.links[0].title} 
                    class="w-full h-full object-cover"
                  />
                </div>
              </a>
              <div class="flex-1">
                <p class="text-gray-600">{project.links[0].description}</p>
              </div>
            </div>
          </div>
        {:else}
          <!-- Multiple links project - original expandable behavior -->
          <div 
            class="flex justify-between items-center cursor-pointer group py-2 -mx-2 px-2 hover:bg-gray-50 rounded transition-colors" 
            on:click={() => toggle(index)}
            on:keydown={(e) => e.key === 'Enter' && toggle(index)}
            role="button"
            tabindex="0"
          >
            <div class="flex-1">
              <h3 class="text-lg font-light group-hover:text-gray-600 transition-colors flex flex-col sm:flex-row sm:justify-between sm:items-center">
                {project.title}
                <span class="text-sm text-gray-500 mt-2 sm:mt-0 sm:ml-4">{formatDateRange(project.dateRange)}</span>
              </h3>
              <p class="text-gray-600 mt-1">
                {project.subhead}
              </p>
            </div>
          </div>

          <!-- Thumbnail Carousel -->
          {#if !project.expanded}
            <div 
              class="mt-4 flex gap-4 overflow-x-auto pb-4 -mx-2 px-2 relative scrollbar-hide"
              bind:this={carousels[project.title]}
            >
              <div class="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none opacity-0 transition-opacity duration-300 has-more:opacity-100"></div>
              {#each project.links as link}
                <button
                  class="flex-shrink-0 w-18 sm:w-24 overflow-hidden hover:opacity-90 transition-opacity focus:outline-none text-left cursor-pointer flex flex-col items-start"
                  on:click={() => toggleAndScroll(index, link.id)}
                >
                  <div class="w-full h-14 sm:h-16 flex items-start">
                    <img 
                      src={link.thumbnail} 
                      alt={link.title} 
                      class="w-full h-14 sm:h-16 object-cover"
                    />
                  </div>
                  <div class="w-full mt-1">
                    <p class="text-[10px] sm:text-[10px] text-gray-600 line-clamp-2 font-light">{link.title}</p>
                  </div>
                </button>
              {/each}
            </div>
          {/if}

          {#if project.expanded}
            <div class="mt-6 space-y-8">
              {#each project.links as link}
                <div id={link.id} class="space-y-4">
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                    <a
                      href={link.url}
                      class="text-base font-light text-gray-800 hover:text-gray-600 transition-colors underline hover:decoration-gray-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.title}
                    </a>
                    <span class="text-sm text-gray-500">{formatDateRange(link.publicationDate)}</span>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-6">
                    <div class="flex flex-col w-full sm:w-40">
                      <div class="w-full aspect-video sm:w-40 sm:h-28 overflow-hidden">
                        <img src={link.thumbnail} alt={link.title} class="w-full h-full object-cover" />
                      </div>
                      <span class="text-[10px] font-light text-gray-400 mt-1">Source: {link.source}</span>
                    </div>
                    <div class="space-y-4">
                      <p class="text-gray-600">{link.description}</p>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          {/if}
        {/if}
      </div>
    {/each}
  </section>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
    --scroll-duration: 1500ms;
  }

  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  :global(.scrollbar-hide) {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  :global(.scrollbar-hide::-webkit-scrollbar) {
    display: none;  /* Chrome, Safari and Opera */
  }

  :global(.has-more) {
    /* This class is used to show/hide the gradient */
  }
</style>
