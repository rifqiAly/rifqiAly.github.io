import axios from "axios";
import moment from "moment";

const k = `U22sdVPvJr54kqWDL237SY1cREaLVi6k`;
const baseUrl = `https://api.nytimes.com/svc/mostpopular/v2`;

const demoData = () => {
  return [
    {
      "uri": "nyt://article/62c05b9a-ba0c-5a79-98ad-1c3daf4e466e",
      "url": "https://www.nytimes.com/2024/05/26/world/europe/england-collyweston-tudor-palace.html",
      "id": 100000009341316,
      "asset_id": 100000009341316,
      "source": "New York Times",
      "published_date": "2024-05-26",
      "updated": "2024-05-28 09:33:30",
      "section": "World",
      "subsection": "Europe",
      "nytdsection": "world",
      "adx_keywords": "Archaeology and Anthropology;Palaces and Castles;Royal Families;Historic Buildings and Sites;Organizations, Societies and Clubs;Henry VIII, King of England;Collyweston (England);England;Great Britain",
      "column": null,
      "byline": "By Megan Specia",
      "type": "Article",
      "title": "Amateur Historians Heard Tales of a Lost Tudor Palace. Then, They Dug It Up.",
      "abstract": "In a small English village, a group of dedicated locals has unearthed the remains of a long-vanished palace that had been home to Henry VIII’s grandmother.",
      "des_facet": [
        "Archaeology and Anthropology",
        "Palaces and Castles",
        "Royal Families",
        "Historic Buildings and Sites",
        "Organizations, Societies and Clubs"
      ],
      "org_facet": [],
      "per_facet": [
        "Henry VIII, King of England"
      ],
      "geo_facet": [
        "Collyweston (England)",
        "England",
        "Great Britain"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Chris Close, center left, in green jacket, consulting with Jennifer Browning, an archaeologist, during work on the dig site in Collyweston, England, early this year.",
          "copyright": "Andrew Testa for The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/05/09/multimedia/XXuk-palace-dispatch-01-jtlg/XXuk-palace-dispatch-01-jtlg-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/09/multimedia/XXuk-palace-dispatch-01-jtlg/XXuk-palace-dispatch-01-jtlg-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/09/multimedia/XXuk-palace-dispatch-01-jtlg/XXuk-palace-dispatch-01-jtlg-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/036ce54d-1a74-58b6-800c-5690929448a6",
      "url": "https://www.nytimes.com/2024/05/24/movies/best-movies-2024-so-far.html",
      "id": 100000009474168,
      "asset_id": 100000009474168,
      "source": "New York Times",
      "published_date": "2024-05-24",
      "updated": "2024-05-27 09:36:31",
      "section": "Movies",
      "subsection": "",
      "nytdsection": "movies",
      "adx_keywords": "Movies",
      "column": null,
      "byline": "By The New York Times",
      "type": "Article",
      "title": "The Best Films of 2024, So Far",
      "abstract": "Our critics pick nine films that they think are worth your time on this long holiday weekend.",
      "des_facet": [
        "Movies"
      ],
      "org_facet": [],
      "per_facet": [],
      "geo_facet": [],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Glen Powell as a professor turned undercover officer in “Hit Man.”",
          "copyright": "Matt Lankes/Netflix",
          "approved_for_syndication": 0,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/05/24/multimedia/24bestfilms-sofar-lqfm/24bestfilms-sofar-lqfm-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/24/multimedia/24bestfilms-sofar-lqfm/24bestfilms-sofar-lqfm-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/24/multimedia/24bestfilms-sofar-lqfm/24bestfilms-sofar-lqfm-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/0f509db6-a18d-54b7-8442-39f1d7f607a7",
      "url": "https://www.nytimes.com/2024/05/25/us/politics/hillary-clinton-abortion.html",
      "id": 100000009476042,
      "asset_id": 100000009476042,
      "source": "New York Times",
      "published_date": "2024-05-25",
      "updated": "2024-05-26 23:36:34",
      "section": "U.S.",
      "subsection": "Politics",
      "nytdsection": "u.s.",
      "adx_keywords": "Abortion;Presidential Election of 2016;Roe v Wade (Supreme Court Decision);Dobbs v Jackson Women's Health Organization (Supreme Court Decision);Presidential Election of 2024;United States Politics and Government;Clinton, Hillary Rodham;Trump, Donald J;Democratic Party;Supreme Court (US)",
      "column": null,
      "byline": "By Lisa Lerer and Elizabeth Dias",
      "type": "Article",
      "title": "Hillary Clinton Has Some Tough Words for Democrats, and for Women",
      "abstract": "In an interview for a forthcoming book, Mrs. Clinton also suggested that if Donald Trump won in November “we may never have another actual election.”",
      "des_facet": [
        "Abortion",
        "Presidential Election of 2016",
        "Roe v Wade (Supreme Court Decision)",
        "Dobbs v Jackson Women's Health Organization (Supreme Court Decision)",
        "Presidential Election of 2024",
        "United States Politics and Government"
      ],
      "org_facet": [
        "Democratic Party",
        "Supreme Court (US)"
      ],
      "per_facet": [
        "Clinton, Hillary Rodham",
        "Trump, Donald J"
      ],
      "geo_facet": [],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "The interview represented Mrs. Clinton’s most detailed comments on abortion rights since the Supreme Court decision overturning Roe v. Wade.",
          "copyright": "Maansi Srivastava/The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/05/23/multimedia/POL-HILLARY-01-cwth/POL-HILLARY-01-cwth-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/23/multimedia/POL-HILLARY-01-cwth/POL-HILLARY-01-cwth-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/23/multimedia/POL-HILLARY-01-cwth/POL-HILLARY-01-cwth-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/09212d3a-cf16-5af4-a29a-fc461f22ebac",
      "url": "https://www.nytimes.com/2024/05/25/opinion/women-aging-main-character.html",
      "id": 100000009480745,
      "asset_id": 100000009480745,
      "source": "New York Times",
      "published_date": "2024-05-25",
      "updated": "2024-05-28 13:23:44",
      "section": "Opinion",
      "subsection": "",
      "nytdsection": "opinion",
      "adx_keywords": "Women and Girls;Women's Rights;Sex;Middle Age (Demographic)",
      "column": null,
      "byline": "By Glynnis MacNicol",
      "type": "Article",
      "title": "Men Fear Me, Society Shames Me, and I Love My Life",
      "abstract": "My story shows there are other, fulfilling ways to live.",
      "des_facet": [
        "Women and Girls",
        "Women's Rights",
        "Sex",
        "Middle Age (Demographic)"
      ],
      "org_facet": [],
      "per_facet": [],
      "geo_facet": [],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Photo illustration by Julia Wimmerlin",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/05/29/opinion/25macnichol/25macnichol-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/29/opinion/25macnichol/25macnichol-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/29/opinion/25macnichol/25macnichol-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/689d6427-6bcb-561f-8fdb-1de35e2af423",
      "url": "https://www.nytimes.com/2024/05/26/travel/nantucket-white-elephant-hotel.html",
      "id": 100000009408058,
      "asset_id": 100000009408058,
      "source": "New York Times",
      "published_date": "2024-05-26",
      "updated": "2024-05-26 05:00:28",
      "section": "Travel",
      "subsection": "",
      "nytdsection": "travel",
      "adx_keywords": "Travel and Vacations;Summer (Season);Hotels and Travel Lodgings;Islands;White Elephant Hotel;Nantucket (Mass)",
      "column": null,
      "byline": "By Alexander Lobrano",
      "type": "Article",
      "title": "From Waiter to Guest at Nantucket’s Grande Dame Hotel",
      "abstract": "A writer returns to a classic Massachusetts hotel, where he worked 50 years ago, to ponder how he, the island, and the newly refurbished inn, have changed.",
      "des_facet": [
        "Travel and Vacations",
        "Summer (Season)",
        "Hotels and Travel Lodgings",
        "Islands"
      ],
      "org_facet": [
        "White Elephant Hotel"
      ],
      "per_facet": [],
      "geo_facet": [
        "Nantucket (Mass)"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "When the White Elephant opened on Nantucket 100 years ago, many doubted the island would draw visitors. Last year, the hotel reopened after an extensive renovation. ",
          "copyright": "Bill Hoenk for The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/05/20/multimedia/00-nantucket-white-elephant-02-lqpk/00-nantucket-white-elephant-02-lqpk-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/20/multimedia/00-nantucket-white-elephant-02-lqpk/00-nantucket-white-elephant-02-lqpk-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/20/multimedia/00-nantucket-white-elephant-02-lqpk/00-nantucket-white-elephant-02-lqpk-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/8f4237b9-0de4-56ff-8c8a-2dddc157a132",
      "url": "https://www.nytimes.com/2024/05/27/arts/music/military-bands-west-point-army.html",
      "id": 100000009230064,
      "asset_id": 100000009230064,
      "source": "New York Times",
      "published_date": "2024-05-27",
      "updated": "2024-05-27 21:16:53",
      "section": "Arts",
      "subsection": "Music",
      "nytdsection": "arts",
      "adx_keywords": "Classical Music;United States Defense and Military Forces;Content Type: Personal Profile;Careers and Professions;Brooks, Ada;United States Military Academy Band;United States Military Academy;United States Army;West Point (NY)",
      "column": null,
      "byline": "By Sarah Diamond and Christopher Lee",
      "type": "Article",
      "title": "She Landed One of Music’s Great Gigs, but First Came Boot Camp",
      "abstract": "Premier military bands offer rare stability for classical musicians, who consider them a strong alternative to traditional orchestras. But signing up means shipping out.",
      "des_facet": [
        "Classical Music",
        "United States Defense and Military Forces",
        "Content Type: Personal Profile",
        "Careers and Professions"
      ],
      "org_facet": [
        "United States Military Academy Band",
        "United States Military Academy",
        "United States Army"
      ],
      "per_facet": [
        "Brooks, Ada"
      ],
      "geo_facet": [
        "West Point (NY)"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Christopher Lee for The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/05/06/multimedia/06MILITARY-BANDS-promo/06MILITARY-BANDS-promo-thumbStandard-v2.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/06/multimedia/06MILITARY-BANDS-promo/06MILITARY-BANDS-promo-mediumThreeByTwo210-v2.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/06/multimedia/06MILITARY-BANDS-promo/06MILITARY-BANDS-promo-mediumThreeByTwo440-v2.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/d78e529f-08c2-516a-9f3c-f124eb68fe38",
      "url": "https://www.nytimes.com/2024/05/26/science/bird-watching.html",
      "id": 100000009472919,
      "asset_id": 100000009472919,
      "source": "New York Times",
      "published_date": "2024-05-26",
      "updated": "2024-05-28 14:32:23",
      "section": "Science",
      "subsection": "",
      "nytdsection": "science",
      "adx_keywords": "Birds;Birdwatching;Animal Cognition;Animal Behavior;internal-truncator",
      "column": null,
      "byline": "By James Gorman",
      "type": "Article",
      "title": "Don’t Let a Bird’s Feathers Fool You",
      "abstract": "From sibling murder to snakes for breakfast, birds’ lives may be darker than you imagine.",
      "des_facet": [
        "Birds",
        "Birdwatching",
        "Animal Cognition",
        "Animal Behavior",
        "internal-truncator"
      ],
      "org_facet": [],
      "per_facet": [],
      "geo_facet": [],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Matt Williams",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/05/28/science/28sci-nirdwatching-attack/28sci-nirdwatching-attack-thumbStandard-v2.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/28/science/28sci-nirdwatching-attack/28sci-nirdwatching-attack-mediumThreeByTwo210-v2.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/28/science/28sci-nirdwatching-attack/28sci-nirdwatching-attack-mediumThreeByTwo440-v2.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/e1e9f27e-d2f3-5274-be6e-c86dc3f35f08",
      "url": "https://www.nytimes.com/2024/05/27/nyregion/street-wars-e-bikes.html",
      "id": 100000009487269,
      "asset_id": 100000009487269,
      "source": "New York Times",
      "published_date": "2024-05-27",
      "updated": "2024-05-28 13:05:09",
      "section": "New York",
      "subsection": "",
      "nytdsection": "new york",
      "adx_keywords": "Electric Bicycles, Motorcycles and Scooters;Delivery Services;Traffic Accidents and Safety;Mobile Applications;Joshi, Meera;New York City",
      "column": null,
      "byline": "By Dodai Stewart",
      "type": "Article",
      "title": "Have E-Bikes Made New York City a ‘Nightmare’?",
      "abstract": "E-bikes zoom down streets, zigzag around cars and zip across sidewalks, changing the way some residents view the streets.",
      "des_facet": [
        "Electric Bicycles, Motorcycles and Scooters",
        "Delivery Services",
        "Traffic Accidents and Safety",
        "Mobile Applications"
      ],
      "org_facet": [],
      "per_facet": [
        "Joshi, Meera"
      ],
      "geo_facet": [
        "New York City"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Elijah Orlandi makes deliveries for Grubhub in the evening after his 9-to-5 job.",
          "copyright": "Elias Williams for The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/06/02/multimedia/27street-wars-newsletter-fmjk/27street-wars-newsletter-fmjk-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/06/02/multimedia/27street-wars-newsletter-fmjk/27street-wars-newsletter-fmjk-mediumThreeByTwo210-v2.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/06/02/multimedia/27street-wars-newsletter-fmjk/27street-wars-newsletter-fmjk-mediumThreeByTwo440-v2.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/b3f0abf1-8dc7-5e2e-aefb-3cddbb3c95f2",
      "url": "https://www.nytimes.com/2024/05/27/opinion/nashville-museum-artifacts-mexico.html",
      "id": 100000009486732,
      "asset_id": 100000009486732,
      "source": "New York Times",
      "published_date": "2024-05-27",
      "updated": "2024-05-28 13:54:03",
      "section": "Opinion",
      "subsection": "",
      "nytdsection": "opinion",
      "adx_keywords": "Museums;Arts and Antiquities Looting;Parthenon (Greece);Nashville (Tenn);Mexico",
      "column": null,
      "byline": "By Margaret Renkl",
      "type": "Article",
      "title": "A Tiny Museum Takes the High Road and Shows the Way Forward",
      "abstract": "Nashville’s Parthenon proves that doing the right thing with looted artifacts doesn’t have to be a fight.",
      "des_facet": [
        "Museums",
        "Arts and Antiquities Looting",
        "Parthenon (Greece)"
      ],
      "org_facet": [],
      "per_facet": [],
      "geo_facet": [
        "Nashville (Tenn)",
        "Mexico"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Nashville’s own Parthenon.",
          "copyright": "William DeShazer for The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/05/28/multimedia/27renkl-wfhm/27renkl-wfhm-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/28/multimedia/27renkl-wfhm/27renkl-wfhm-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/28/multimedia/27renkl-wfhm/27renkl-wfhm-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/9ad6c959-f88a-59c0-b290-c8a7c18a2f8a",
      "url": "https://www.nytimes.com/2024/05/26/style/pietros-manhattan-steak-house-goodbye.html",
      "id": 100000009487644,
      "asset_id": 100000009487644,
      "source": "New York Times",
      "published_date": "2024-05-26",
      "updated": "2024-05-28 13:26:43",
      "section": "Style",
      "subsection": "",
      "nytdsection": "style",
      "adx_keywords": "internal-truncator;Restaurants;Beef;Relocation of Business;Italian Food (Cuisine);Pietro's (Manhattan, NY, Restaurant);Midtown Area (Manhattan, NY)",
      "column": null,
      "byline": "By Alex Vadukul",
      "type": "Article",
      "title": "A Medium-Rare Goodbye",
      "abstract": "Pietro’s, an old-guard Italian steakhouse, said farewell to its longtime address in Midtown Manhattan with a crew of regulars.",
      "des_facet": [
        "internal-truncator",
        "Restaurants",
        "Beef",
        "Relocation of Business",
        "Italian Food (Cuisine)"
      ],
      "org_facet": [
        "Pietro's (Manhattan, NY, Restaurant)"
      ],
      "per_facet": [],
      "geo_facet": [
        "Midtown Area (Manhattan, NY)"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Jutharat Pinyodoonyachet for The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/05/24/multimedia/PIETROS-promo/PIETROS-kpfq-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/24/multimedia/PIETROS-promo/PIETROS-kpfq-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/24/multimedia/PIETROS-promo/PIETROS-kpfq-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/9deaddc6-bc97-5181-b198-2d310d597d83",
      "url": "https://www.nytimes.com/article/memorial-day-history.html",
      "id": 100000008801442,
      "asset_id": 100000008801442,
      "source": "New York Times",
      "published_date": "2023-05-26",
      "updated": "2024-05-27 01:48:10",
      "section": "U.S.",
      "subsection": "",
      "nytdsection": "u.s.",
      "adx_keywords": "Memorial Day;Veterans;Monuments and Memorials (Structures);Veterans Day (US);Awards, Decorations and Honors;Holidays and Special Occasions;United States",
      "column": null,
      "byline": "By Livia Albeck-Ripka",
      "type": "Article",
      "title": "The Tangled Roots of Memorial Day and Why It’s Celebrated",
      "abstract": "The holiday marks the unofficial start of summer and honors those who have died in the nation’s wars. Here’s how it all began.",
      "des_facet": [
        "Memorial Day",
        "Veterans",
        "Monuments and Memorials (Structures)",
        "Veterans Day (US)",
        "Awards, Decorations and Honors",
        "Holidays and Special Occasions"
      ],
      "org_facet": [],
      "per_facet": [],
      "geo_facet": [
        "United States"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Krista Meinert sitting beside her son’s headstone at Arlington National Cemetery in Virginia last May.",
          "copyright": "Pete Marovich for The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/05/26/multimedia/26xp-memorialday-lwbp/26xp-memorialday-lwbp-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/26/multimedia/26xp-memorialday-lwbp/26xp-memorialday-lwbp-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/26/multimedia/26xp-memorialday-lwbp/26xp-memorialday-lwbp-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/bbb785e1-7c2f-57ad-922e-b21448c15764",
      "url": "https://www.nytimes.com/2024/05/26/world/middleeast/hamas-sinwar-israel-doctor-prison-swap.html",
      "id": 100000009426639,
      "asset_id": 100000009426639,
      "source": "New York Times",
      "published_date": "2024-05-26",
      "updated": "2024-05-26 12:44:34",
      "section": "World",
      "subsection": "Middle East",
      "nytdsection": "world",
      "adx_keywords": "Content Type: Personal Profile;Israel-Gaza War (2023- );Terrorism;Kidnapping and Hostages;internal-truncator;Bitton, Yuval;Sinwar, Yehya;Hamas;Israel;Gaza Strip",
      "column": null,
      "byline": "By Jo Becker and Adam Sella",
      "type": "Article",
      "title": "The Hamas Chief and the Israeli Who Saved His Life",
      "abstract": "In an Israeli prison infirmary, a Jewish dentist came to the aid of a desperately ill Hamas inmate. Years later, the prisoner became a mastermind of the Oct. 7 attack.",
      "des_facet": [
        "Content Type: Personal Profile",
        "Israel-Gaza War (2023- )",
        "Terrorism",
        "Kidnapping and Hostages",
        "internal-truncator"
      ],
      "org_facet": [
        "Hamas"
      ],
      "per_facet": [
        "Bitton, Yuval",
        "Sinwar, Yehya"
      ],
      "geo_facet": [
        "Israel",
        "Gaza Strip"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Yahya Sinwar, left, and Dr. Yuval Bitton at Israel’s Beersheba prison complex, during negotiations for a prisoner swap that would lead to Mr. Sinwar’s 2011 release.",
          "copyright": "",
          "approved_for_syndication": 0,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/05/22/multimedia/00sinwar-dentist-pwzv/00sinwar-dentist-pwzv-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/22/multimedia/00sinwar-dentist-pwzv/00sinwar-dentist-pwzv-mediumThreeByTwo210-v2.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/22/multimedia/00sinwar-dentist-pwzv/00sinwar-dentist-pwzv-mediumThreeByTwo440-v2.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/fee7c048-5348-570e-a43d-00fcd5084b69",
      "url": "https://www.nytimes.com/2024/05/27/us/david-tatel-vision-blindness-supreme-court.html",
      "id": 100000009488256,
      "asset_id": 100000009488256,
      "source": "New York Times",
      "published_date": "2024-05-27",
      "updated": "2024-05-27 23:06:06",
      "section": "U.S.",
      "subsection": "",
      "nytdsection": "u.s.",
      "adx_keywords": "Service Dogs and Other Animals;Decisions and Verdicts;Blindness;United States Politics and Government;Courts and the Judiciary;Tatel, David S;Supreme Court (US)",
      "column": null,
      "byline": "By Adam Liptak",
      "type": "Article",
      "title": "Lessons from Judge David Tatel’s Guide Dog on Blindness and Vision",
      "abstract": "In a new memoir, a retired federal appeals court judge who was once a leading candidate for the Supreme Court reflects on candor and independence.",
      "des_facet": [
        "Service Dogs and Other Animals",
        "Decisions and Verdicts",
        "Blindness",
        "United States Politics and Government",
        "Courts and the Judiciary"
      ],
      "org_facet": [
        "Supreme Court (US)"
      ],
      "per_facet": [
        "Tatel, David S"
      ],
      "geo_facet": [],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Judge David S. Tatel and his service dog, Vixen, met in 2019, transforming Judge Tatel’s life.",
          "copyright": "Erin Schaff/The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/05/27/multimedia/27dc-bar3-zjfg/27dc-bar3-zjfg-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/27/multimedia/27dc-bar3-zjfg/27dc-bar3-zjfg-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/27/multimedia/27dc-bar3-zjfg/27dc-bar3-zjfg-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/95e8fe87-fbab-58e9-aa76-dbec9ee0d081",
      "url": "https://www.nytimes.com/2024/05/27/style/bag-balm-beauty-secret-tiktok.html",
      "id": 100000009467502,
      "asset_id": 100000009467502,
      "source": "New York Times",
      "published_date": "2024-05-27",
      "updated": "2024-05-27 05:02:05",
      "section": "Style",
      "subsection": "",
      "nytdsection": "style",
      "adx_keywords": "Social Media;Skin;Agriculture and Farming;Generation Z;Cosmetics and Toiletries;internal-truncator;Bag Balm;TikTok (ByteDance)",
      "column": null,
      "byline": "By Steven Kurutz",
      "type": "Article",
      "title": "TikTok Rediscovers an Old Rural Beauty Secret",
      "abstract": "Social media fans of Bag Balm, a moisturizer originally made for cows’ udders, say it’s just the thing for “slugging.”",
      "des_facet": [
        "Social Media",
        "Skin",
        "Agriculture and Farming",
        "Generation Z",
        "Cosmetics and Toiletries",
        "internal-truncator"
      ],
      "org_facet": [
        "Bag Balm",
        "TikTok (ByteDance)"
      ],
      "per_facet": [],
      "geo_facet": [],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Freshly filled containers of Bag Balm cooling on a conveyor belt at a plant in Lyndonville, Vt.",
          "copyright": "John Tully for The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/05/27/multimedia/27BAGBALM-01-mwbz/27BAGBALM-01-mwbz-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/27/multimedia/27BAGBALM-01-mwbz/27BAGBALM-01-mwbz-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/27/multimedia/27BAGBALM-01-mwbz/27BAGBALM-01-mwbz-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/09da581c-ca3e-5372-b86e-6c5af665baa4",
      "url": "https://www.nytimes.com/article/manhattanhenge-2024-time-how-to-watch.html",
      "id": 100000009483878,
      "asset_id": 100000009483878,
      "source": "New York Times",
      "published_date": "2024-05-27",
      "updated": "2024-05-28 12:49:25",
      "section": "Science",
      "subsection": "",
      "nytdsection": "science",
      "adx_keywords": "Sun;Space and Astronomy;Architecture;Content Type: Service;Manhattan (NYC);New York City",
      "column": null,
      "byline": "By Katrina Miller",
      "type": "Article",
      "title": "Here Comes Manhattanhenge 2024: When and Where to Watch",
      "abstract": "The annual event brings New Yorkers together to celebrate longer days, warmer weather and epic summer sunsets.",
      "des_facet": [
        "Sun",
        "Space and Astronomy",
        "Architecture",
        "Content Type: Service"
      ],
      "org_facet": [],
      "per_facet": [],
      "geo_facet": [
        "Manhattan (NYC)",
        "New York City"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Manhattanhenge observed on 42nd street in Manhattan last May.",
          "copyright": "Jeenah Moon for The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/05/27/multimedia/27manhattanhenge-2024-01-jctp/27manhattanhenge-2024-01-jctp-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/27/multimedia/27manhattanhenge-2024-01-jctp/27manhattanhenge-2024-01-jctp-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/27/multimedia/27manhattanhenge-2024-01-jctp/27manhattanhenge-2024-01-jctp-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/115185d1-d568-585e-94de-eab4e04c4d17",
      "url": "https://www.nytimes.com/2016/03/27/magazine/bill-waltons-long-strange-tale-of-nba-survival.html",
      "id": 100000004280255,
      "asset_id": 100000004280255,
      "source": "New York Times",
      "published_date": "2016-03-25",
      "updated": "2018-01-19 17:53:49",
      "section": "Magazine",
      "subsection": "",
      "nytdsection": "magazine",
      "adx_keywords": "Basketball;Books and Literature;Sports Injuries;Anderson, Sam;Walton, Bill;Grateful Dead;National Basketball Assn",
      "column": null,
      "byline": "By Sam Anderson",
      "type": "Article",
      "title": "Bill Walton’s Long, Strange Tale of N.B.A. Survival",
      "abstract": "A basketball legend looks back with surprising gratitude on a life plagued by physical agony.",
      "des_facet": [
        "Basketball",
        "Books and Literature",
        "Sports Injuries"
      ],
      "org_facet": [
        "Grateful Dead",
        "National Basketball Assn"
      ],
      "per_facet": [
        "Anderson, Sam",
        "Walton, Bill"
      ],
      "geo_facet": [],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Bill Walton",
          "copyright": "Graeme Mitchell for The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2016/03/27/magazine/27walton1-promo/27walton3-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2016/03/27/magazine/27walton1-promo/27walton3-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            },
            {
              "url": "https://static01.nyt.com/images/2016/03/27/magazine/27walton1-promo/27walton3-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/ece5234a-b822-5df0-bfff-4b728a85eab9",
      "url": "https://www.nytimes.com/2024/05/27/opinion/publishing-literary-antisemitism.html",
      "id": 100000009481337,
      "asset_id": 100000009481337,
      "source": "New York Times",
      "published_date": "2024-05-27",
      "updated": "2024-05-28 13:50:19",
      "section": "Opinion",
      "subsection": "",
      "nytdsection": "opinion",
      "adx_keywords": "Israel-Gaza War (2023- );Books and Literature;Jews and Judaism;Zionism;Writing and Writers;Book Trade and Publishing;Anti-Semitism;PEN American Center;Jewish Book Council;Gaza Strip;Israel",
      "column": null,
      "byline": "By James Kirchick",
      "type": "Article",
      "title": "A Chill Has Fallen Over Jews in Publishing",
      "abstract": "A litmus test has emerged across wide swaths of the literary world, effectively excluding Jews from full participation unless they denounce Israel.",
      "des_facet": [
        "Israel-Gaza War (2023- )",
        "Books and Literature",
        "Jews and Judaism",
        "Zionism",
        "Writing and Writers",
        "Book Trade and Publishing",
        "Anti-Semitism"
      ],
      "org_facet": [
        "PEN American Center",
        "Jewish Book Council"
      ],
      "per_facet": [],
      "geo_facet": [
        "Gaza Strip",
        "Israel"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Thomas Nondh Jansen/Connected Archives",
          "approved_for_syndication": 0,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/05/24/opinion/24kirchick/24kirchick-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/24/opinion/24kirchick/24kirchick-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/24/opinion/24kirchick/24kirchick-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/37be3852-7f5e-58a4-8ff2-9d07c5a945dd",
      "url": "https://www.nytimes.com/2024/05/27/business/economy/china-us-tariffs.html",
      "id": 100000009482002,
      "asset_id": 100000009482002,
      "source": "New York Times",
      "published_date": "2024-05-27",
      "updated": "2024-05-27 21:45:14",
      "section": "Business",
      "subsection": "Economy",
      "nytdsection": "business",
      "adx_keywords": "International Relations;Alternative and Renewable Energy;Protectionism (Trade);International Trade and World Market;United States Economy;Solar Energy;Politics and Government;Economic Conditions and Trends;Electric and Hybrid Vehicles;Energy and Power;Customs (Tariff);Factories and Manufacturing;internal-truncator;China;Europe;United States;Germany",
      "column": null,
      "byline": "By Patricia Cohen, Keith Bradsher and Jim Tankersley",
      "type": "Article",
      "title": "How China Pulled So Far Ahead on Industrial Policy",
      "abstract": "The United States and Europe are trying to catch up to a rival skilled in using all the levers of government and banking to dominate global manufacturing.",
      "des_facet": [
        "International Relations",
        "Alternative and Renewable Energy",
        "Protectionism (Trade)",
        "International Trade and World Market",
        "United States Economy",
        "Solar Energy",
        "Politics and Government",
        "Economic Conditions and Trends",
        "Electric and Hybrid Vehicles",
        "Energy and Power",
        "Customs (Tariff)",
        "Factories and Manufacturing",
        "internal-truncator"
      ],
      "org_facet": [],
      "per_facet": [],
      "geo_facet": [
        "China",
        "Europe",
        "United States",
        "Germany"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Ningbo Zhongshan port in China, one of the busiest ports in the world.",
          "copyright": "Gilles Sabrié for The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/05/24/multimedia/00china-US-01-kzvw/00china-US-01-kzvw-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/24/multimedia/00china-US-01-kzvw/00china-US-01-kzvw-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/24/multimedia/00china-US-01-kzvw/00china-US-01-kzvw-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/2af39993-4da9-5f65-83c4-dfd3a3b0c189",
      "url": "https://www.nytimes.com/2024/05/26/us/politics/montana-senate-bozeman-growth.html",
      "id": 100000009445624,
      "asset_id": 100000009445624,
      "source": "New York Times",
      "published_date": "2024-05-26",
      "updated": "2024-05-28 09:06:33",
      "section": "U.S.",
      "subsection": "Politics",
      "nytdsection": "u.s.",
      "adx_keywords": "vis-photo;Elections, Senate;Domestic Migration;Voting and Voters;United States Politics and Government;Economic Conditions and Trends;Tester, Jon;Sheehy, Tim (1985- );Democratic Party;Republican Party;Senate;Montana;Bozeman (Mont)",
      "column": null,
      "byline": "By Kellen Browning and Louise Johns",
      "type": "Article",
      "title": "Big Sky, Big Growth: How Montana’s Newcomers Are Shaping Its Senate Duel",
      "abstract": "Out-of-state transplants, drawn during the pandemic by the Mountain West’s allure, have caused prices to soar and created new uncertainty in the state’s crucial Senate race.",
      "des_facet": [
        "vis-photo",
        "Elections, Senate",
        "Domestic Migration",
        "Voting and Voters",
        "United States Politics and Government",
        "Economic Conditions and Trends"
      ],
      "org_facet": [
        "Democratic Party",
        "Republican Party",
        "Senate"
      ],
      "per_facet": [
        "Tester, Jon",
        "Sheehy, Tim (1985- )"
      ],
      "geo_facet": [
        "Montana",
        "Bozeman (Mont)"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Louise Johns for The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/05/22/multimedia/pol-montana-growthpromo-hzpv/pol-montana-growthpromo-hzpv-thumbStandard-v2.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/22/multimedia/pol-montana-growthpromo-hzpv/pol-montana-growthpromo-hzpv-mediumThreeByTwo210-v2.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/22/multimedia/pol-montana-growthpromo-hzpv/pol-montana-growthpromo-hzpv-mediumThreeByTwo440-v2.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    },
    {
      "uri": "nyt://article/39ef4c2a-6fe6-550f-9872-fbc957d50333",
      "url": "https://www.nytimes.com/2024/05/25/nyregion/hotels-prices-migrants-nyc.html",
      "id": 100000009468666,
      "asset_id": 100000009468666,
      "source": "New York Times",
      "published_date": "2024-05-25",
      "updated": "2024-05-26 23:16:38",
      "section": "New York",
      "subsection": "",
      "nytdsection": "new york",
      "adx_keywords": "Hotels and Travel Lodgings;Prices (Fares, Fees and Rates);Immigration Shelters;Shortages;Government Contracts and Procurement;Adams, Eric L;Hotel Association of New York;Airbnb;New York City",
      "column": null,
      "byline": "By Luis Ferré-Sadurní",
      "type": "Article",
      "title": "Why N.Y.C. Hotel Rooms Are So Expensive Right Now",
      "abstract": "The average hotel room rate in the city is $301 a night, a record. A major reason: One of every five hotels is now a shelter, contributing to a shortage of tourist lodging.",
      "des_facet": [
        "Hotels and Travel Lodgings",
        "Prices (Fares, Fees and Rates)",
        "Immigration Shelters",
        "Shortages",
        "Government Contracts and Procurement"
      ],
      "org_facet": [
        "Hotel Association of New York",
        "Airbnb"
      ],
      "per_facet": [
        "Adams, Eric L"
      ],
      "geo_facet": [
        "New York City"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Many of the hotels now operating as shelters, like The Row in the Times Square area, are congregated in places like Midtown Manhattan and near Kennedy Airport.",
          "copyright": "Kirsten Luce for The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2024/05/25/multimedia/25ny-hotels-newtop=-1-kbfz/25ny-hotels-newtop=-1-kbfz-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/25/multimedia/25ny-hotels-newtop=-1-kbfz/25ny-hotels-newtop=-1-kbfz-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2024/05/25/multimedia/25ny-hotels-newtop=-1-kbfz/25ny-hotels-newtop=-1-kbfz-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ],
      "eta_id": 0
    }
  ]
}

const getEmailed = async (period: string) => {
  try {
    const res = await axios.get(`${baseUrl}/emailed/${period}.json`, {
      params: {
        "api-key": k,
      },
    });
    if (res.data.status === "OK") {
      return res.data.results;
    }
  } catch (error) {
    console.log(error);
  }
};

const getShared = async (period: string) => {
  try {
    const res = await axios.get(`${baseUrl}/shared/${period}.json`, {
      params: {
        "api-key": k,
      },
    });
    if (res.data.status === "OK") {
      return res.data.results;
    }
  } catch (error) {
    console.log(error);
  }
};

const getViewed = async (period: string) => {
  try {
    const res = await axios.get(`${baseUrl}/viewed/${period}.json`, {
      params: {
        "api-key": k,
      },
    });
    if (res.data.status === "OK") {
      return res.data.results;
    }
  } catch (error) {
    console.log(error);
  }
};

const calcPrice = (publishedDate: string) => {
  const time = moment(publishedDate).fromNow();
  if (time.includes("days ago")) {
    let num = time.split("days ago");
    if (+num[0] > 1 && +num[0] <= 7) {
      return "20.000";
    } else if (+num[0] > 7) {
      return "Free";
    }
  } else {
    if (
      time.includes("year ago") ||
      time.includes("month ago") ||
      time.includes("years ago") ||
      time.includes("months ago")
    ) {
      return "Free";
    } else {
      return "50.000";
    }
  }
};

const formatPublish = (publishedDate: string) => {
  return moment(publishedDate).fromNow();
};

export default {
  getEmailed,
  getShared,
  getViewed,
  calcPrice,
  formatPublish,
  demoData
};
