export type ProjectLink = {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  publicationDate: string;
  source: string;
};

export type Project = {
  title: string;
  subhead: string;
  expanded: boolean;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: 'Investigating New York City\'s Privately Owned Public Spaces',
    subhead: 'I visited more than 100 of the city\'s "privately owned public spaces" (POPS). There are more than 600 of these spaces in the city, and they exist because of a 1961 zoning law that lets developers trade public space in exchange for bonus floor area to build with. I found that developers have traded ~600 of these spaces for 20 million sq. ft. of bonus floor area worth ~$10 billion. But half of the buildings with these spaces were found to be violating the agreement.',
    expanded: false,
    links: [
      {
        id: 'nyc-pops-1',
        title: 'New Yorkers Got Broken Promises. Developers Got 20 Million Sq. Ft.',
        description: 'It was supposed to be an even trade: Permission to raise larger buildings in exchange for airy, open spaces for the public. The reality has been different.',
        thumbnail: 'https://static01.nyt.com/images/2023/07/20/nyregion/2023-04-05-pops-index/2023-04-05-pops-index-square640-v4.jpg?quality=100&auto=webp',
        url: 'https://www.nytimes.com/interactive/2023/07/21/nyregion/nyc-developers-private-owned-public-spaces.html',
        publicationDate: '2023-07-21',
        source: 'The New York Times'
      },
      {
        id: 'nyc-pops-2',
        title: 'Some Urban Oases Are Closed to the Public',
        description: 'An interview I did with James Barron for the New York Today column, in which I talk more about my methodology and on-the-ground observations while reporting this story.',
        thumbnail: 'https://static01.nyt.com/images/2023/08/07/multimedia/07nytoday-private-plazas-vcgm/07nytoday-private-plazas-vcgm-superJumbo.jpg?quality=75&auto=webp',
        url: 'https://www.nytimes.com/2023/08/07/nyregion/some-urban-oases-are-closed-to-the-public.html',
        publicationDate: '2023-08-07',
        source: 'The New York Times'
      },
      {
        id: 'nyc-pops-3',
        title: 'Open Data Week 2024 Talk',
        description: 'I presented the process of finding, reporting and visualizing this story at the NYC School of Data\'s Open Data Week conference in 2024.',
        thumbnail: 'https://img.youtube.com/vi/NouPKeB_pUA/0.jpg',
        url: 'https://youtu.be/NouPKeB_pUA',
        publicationDate: '2024-03-23',
        source: 'NYC School of Data'
      }
    ]
  },
  {
    title: 'International Election Results',
    subhead: 'The New York Times has recently expanded its election coverage to include a broader swathe of international elections. I have contributed to coverage of elections in Mexico, India, the E.U., the U.K., France and Germany. I led the development of a scalable data pipeline to scrape and process election results from various providers.',
    expanded: false,
    links: [
      {
        id: 'german-elections-1',
        title: 'Germany Election Maps: How Conservatives Regained Power',
        description: 'Maps show how every district in Germany voted. The conservative Christian Democrats have won the most seats while the far-right AfD placed second.',
        thumbnail: 'https://static01.nyt.com/images/2025/02/24/multimedia/2025-02-03-german-election-analysis-index/2025-02-03-german-election-analysis-index-square320-v5.png?quality=100&auto=webp',
        url: 'https://www.nytimes.com/interactive/2025/02/23/world/europe/germany-election-results-analysis.html',
        publicationDate: '2025-02-23',
        source: 'The New York Times'
      },
      {
        id: 'france-elections-1',
        title: 'Mapping How France Voted',
        description: 'No party secured an absolute majority in the 2024 legislative elections, leaving France headed for gridlock or political instability.',
        thumbnail: 'https://static01.nyt.com/images/2024/07/03/multimedia/2024-03-29-international-elections-results-france/2024-03-29-international-elections-results-france-square640-v8.png?quality=100&auto=webp',
        url: 'https://www.nytimes.com/2024/07/08/world/europe/france-election-maps.html',
        publicationDate: '2024-07-08',
        source: 'The New York Times'
      },
      {
        id: 'uk-elections-1',
        title: 'U.K. 2024 Election Results: Labour Wins',
        description: 'Results and maps from the 2024 U.K. general election',
        thumbnail: 'https://static01.nyt.com/images/2024/07/04/multimedia/2024-03-29-international-elections-results-2024-07-04-uk/2024-03-29-international-elections-results-2024-07-04-uk-square640-v5.png?quality=100&auto=webp',
        url: 'https://www.nytimes.com/interactive/2024/07/04/world/europe/results-uk-general-election.html',
        publicationDate: '2024-07-04',
        source: 'The New York Times'
      },
      {
        id: 'india-elections-2',
        title: 'Where India Turned Against Modi',
        description: 'Maps show how Modi lost support throughout the country, including in areas that had embraced his party’s Hindu-nationalist ideology.',
        thumbnail: 'https://static01.nyt.com/images/2024/06/07/multimedia/2024-06-05-india-elections-index/2024-06-05-india-elections-index-square640-v7.jpg?quality=100&auto=webp',
        url: 'https://www.nytimes.com/interactive/2024/06/07/world/asia/india-election-map.html',
        publicationDate: '2024-06-07',
        source: 'The New York Times'
      },
      {
        id: 'india-elections-1',
        title: '2024 India General Election: Live Results',
        description: `Results and maps from India's 2024 Lok Sabha elections.`,
        thumbnail: 'https://static01.nyt.com/images/2024/06/01/multimedia/2024-03-29-international-elections-results-india/2024-03-29-international-elections-results-india-square640-v7.png?quality=100&auto=webp',
        url: 'https://www.nytimes.com/interactive/2024/06/03/world/asia/results-india-lok-sabha-election.html',
        publicationDate: '2024-06-03',
        source: 'The New York Times'
      },
    ]
  },
  {
    title: 'U.S. Election Results',
    subhead: 'I have contributed to the Times\'s results coverage for the 2022 Midterm Elections and the 2024 Presidential Election.',
    expanded: false,
    links: [
      {
        id: 'us-elections-1',
        title: 'Presidential Election Results: Trump Wins',
        description: 'Live presidential results and maps from every state and county in the 2024 election.',
        thumbnail: 'https://static01.nyt.com/images/2024/11/05/multimedia/eln-POST-2024-11-05-national-map-president-P-476eb5/eln-POST-2024-11-05-national-map-president-P-476eb5-square320.jpg?quality=100&auto=webp',
        url: 'https://www.nytimes.com/interactive/2024/11/05/us/elections/results-president.html',
        publicationDate: '2024-11-05',
        source: 'The New York Times'
      },
      {
        id: 'us-elections-2',
        title: '2022 Live Election Results: Top Races to Watch',
        description: 'The latest results and vote analysis on The Times\'s election night dashboard of the most important races in the 2022 midterm elections.',
        thumbnail: 'https://static01.nyt.com/images/2022/11/03/multimedia/eln-promo-2022-11-08-dashboard-RESULTS_LIVE/eln-promo-2022-11-08-dashboard-RESULTS_LIVE-square320.jpg?quality=100&auto=webp',
        url: 'https://www.nytimes.com/interactive/2022/11/08/us/elections/results-key-races.html',
        publicationDate: '2022-11-08',
        source: 'The New York Times'
      }
    ]
  },
  {
    title: 'Federal Workers Sourcing Initiative',
    subhead: 'There have been widespread layoffs in the federal government under the second Trump administration. As part of the Times\'s effort to cover this ongoingstory, I led a callout-driven effort to collect experiences from federal workers to create a shared sourcepool for the newsroom.',
    expanded: false,
    links: [
      {
        id: 'federal-workers-sourcing-1',
        title: 'Are You a Federal Worker? We Want To Hear From You.',
        description: 'The Times would like to hear about your experience as a federal worker under the second Trump administration. We may reach out about your submission, but we will not publish any part of your response without contacting you first.',
        thumbnail: 'https://static01.nyt.com/images/2025/03/10/multimedia/federal-workers-callout-promo/federal-workers-callout-promo-articleLarge.png',
        url: 'https://www.nytimes.com/2025/03/11/us/federal-workers-agencies-trump.html',
        publicationDate: '2024-11-05',
        source: 'The New York Times'
      },
    ]
  },
  {
    title: 'Sports Coverage: Olympics and World Cups',
    subhead: 'I have contributed to sports coverage for the 2024 Paris Olympics and the 2022 and 2023 World Cups. This involved partnering with the Sports desk and the Upshot to create data pipelines to power our coverage.',
    expanded: false,
    links: [
      {
        id: 'sports-coverage-1',
        title: 'Olympics 2024 Results and Medals',
        description: 'The latest medal count and results for the Paris Olympics.',
        thumbnail: 'https://static01.nyt.com/images/2024/07/27/world/olys2024-medal-count-results-1722079002785/olys2024-medal-count-results-1722079002785-square320.png?quality=100&auto=webp',
        url: 'https://www.nytimes.com/interactive/2024/world/olympics-results-medals.html',
        publicationDate: '2024-07-27',
        source: 'The New York Times'
      },
      {
        id: 'sports-coverage-2',
        title: 'Women\'s World Cup Bracket: The Knockout Stage',
        description: 'It’s “win or go home” time in the Women’s World Cup knockout stage. Follow the latest scores and the bracket here.',
        thumbnail: 'https://static01.nyt.com/images/2023/08/17/sports/world-cup/womens-world-cup-bracket-1692253767704/womens-world-cup-bracket-1692253767704-square320.png?quality=100&auto=webp',
        url: 'https://www.nytimes.com/interactive/2023/sports/world-cup/womens-world-cup-bracket.html',
        publicationDate: '2023-08-23',
        source: 'The New York Times'
      },
      {
        id: 'sports-coverage-3',
        title: 'World Cup 2022: How Teams Can Advance to the Round of 16',
        description: 'An overview of the scenarios describing how all 32 teams can advance to the knockout round in the 2022 World Cup.',
        thumbnail: 'https://static01.nyt.com/images/2022/11/19/upshot/wc-upshot-promo/wc-upshot-promo-square320.png?quality=100&auto=webp',
        url: 'https://www.nytimes.com/interactive/2022/upshot/world-cup-standings.html',
        publicationDate: '2022-12-18',
        source: 'The New York Times'
      },
    ]
  },
];

export const siteContent = {
  name: 'Urvashi Uberoy',
  tagline: "I am currently a newsroom engineer on the Interactive News desk at The New York Times, where I contribute to newsroom tooling and data-driven coverage. I studied computer science and architecture at Princeton University."
}; 