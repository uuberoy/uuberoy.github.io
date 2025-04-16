<script lang="ts">
  import { projects as initialProjects, siteContent } from '$lib/data';
  import { format, parseISO } from 'date-fns';

  let projects = initialProjects;

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
        const offset = 100; // Add 100px offset from the top
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  }

  function formatDate(dateString: string): string {
    return format(parseISO(dateString), 'MMMM d, yyyy');
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
        <div 
          class="flex justify-between items-start cursor-pointer group py-2 -mx-2 px-2 hover:bg-gray-50 rounded transition-colors" 
          on:click={() => toggle(index)}
          on:keydown={(e) => e.key === 'Enter' && toggle(index)}
          role="button"
          tabindex="0"
        >
          <div>
            <h3 class="text-xl font-light group-hover:text-gray-600 transition-colors">{project.title}</h3>
            <p class="text-gray-600 mt-1">{project.subhead}</p>
          </div>
          <span class="text-gray-400 group-hover:text-gray-600 transition-colors text-lg w-6 h-6 flex items-center justify-center mt-1">
            {project.expanded ? '−' : '+'}
          </span>
        </div>

        <!-- Thumbnail Carousel -->
        {#if !project.expanded}
          <div class="mt-4 flex gap-4 overflow-x-auto pb-4 -mx-2 px-2 scrollbar-hide">
            {#each project.links as link}
              <button
                class="flex-shrink-0 w-24 overflow-hidden hover:opacity-90 transition-opacity focus:outline-none text-left cursor-pointer flex flex-col items-start"
                on:click={() => toggleAndScroll(index, link.id)}
              >
                <div class="w-full h-16 flex items-start">
                  <img 
                    src={link.thumbnail} 
                    alt={link.title} 
                    class="w-full h-16 object-cover"
                  />
                </div>
                <div class="w-full mt-1">
                  <p class="text-[10px] text-gray-600 line-clamp-2 font-light">{link.title}</p>
                </div>
              </button>
            {/each}
          </div>
        {/if}

        {#if project.expanded}
          <div class="mt-6 space-y-8">
            {#each project.links as link}
              <div id={link.id} class="space-y-4">
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                  <a
                    href={link.url}
                    class="text-lg font-light text-gray-800 hover:text-gray-600 transition-colors underline hover:decoration-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.title}
                  </a>
                  <span class="text-sm text-gray-500">{formatDate(link.publicationDate)}</span>
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
      </div>
    {/each}
  </section>
</main>

<style>
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
</style>
