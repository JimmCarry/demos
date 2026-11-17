# Demo websites

Five hand-coded demo websites for different kinds of small businesses, built with **Nuxt 4 + Vue 3 + TypeScript**
by [Lukáš Žáček](https://www.lukaszacekwebdeveloper.cz). All businesses, people and contact details are fictional.

| Site | Industry | Pages |
| --- | --- | --- |
| [Bramble & Bean](/cafe) | Café & bistro | Home, Menu, About, Contact (table booking) |
| [Linden Dental Studio](/dental) | Dental clinic | Home, Treatments, Team, Contact (appointment request) |
| [Hartwell & Moss](/law) | Law firm | Home, Practice areas, About, Contact (consultation request) |
| [Ironbark Builders](/builders) | Construction | Home, Services, Projects, About, Contact (quote request) |
| [Still Water Yoga](/yoga) | Yoga studio | Home, Classes, Pricing, About, Contact |

Each site has its own layout, fonts and colours, a responsive design with a mobile menu, SEO meta tags per page and a
validated contact form (the forms don't send anything, it's a static demo).

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # static build in .output/public
```

## Structure

```
app/
  pages/index.vue            hub page listing all demos
  pages/<site>/              pages of one demo site
  layouts/<site>.vue         header, footer, fonts and colours of one site
  components/<site>/         components of one site
  utils/<site>.ts            data (menu, prices, schedule...)
  composables/useContactForm.ts   shared form validation
public/<site>/               photos
credits/<site>.md            photo credits (Unsplash)
```

Photos from [Unsplash](https://unsplash.com), used under the Unsplash License.
