// Shared data for the Bramble & Bean demo site.

export type CafeDiet = 'V' | 'VG' | 'GF'

export interface CafeMenuItem {
  name: string
  description: string
  price: number
  diet?: CafeDiet[]
}

export interface CafeMenuCategory {
  id: string
  title: string
  note: string
  items: CafeMenuItem[]
}

export const cafeDietLegend: { code: CafeDiet; label: string }[] = [
  { code: 'V', label: 'Vegetarian' },
  { code: 'VG', label: 'Vegan' },
  { code: 'GF', label: 'Gluten-free' }
]

export const cafeMenu: CafeMenuCategory[] = [
  {
    id: 'coffee',
    title: 'Coffee & tea',
    note: 'Beans from Foxglove Roasters, 12 miles away. Oat, soy or whole milk, same price.',
    items: [
      { name: 'Espresso', description: 'Double shot of our house blend, notes of hazelnut and dark cherry.', price: 2.8, diet: ['VG', 'GF'] },
      { name: 'Flat white', description: 'Double ristretto with silky steamed milk, 6 oz.', price: 3.6, diet: ['V', 'GF'] },
      { name: 'Latte', description: 'Espresso with plenty of steamed milk and a thin cap of foam.', price: 3.9, diet: ['V', 'GF'] },
      { name: 'Cappuccino', description: 'Equal parts espresso, milk and foam, dusted with cocoa.', price: 3.7, diet: ['V', 'GF'] },
      { name: 'Batch brew filter', description: 'Single-origin filter coffee, refills for 1.50.', price: 3.0, diet: ['VG', 'GF'] },
      { name: 'Honey & cardamom latte', description: 'Our seasonal favourite, with local wildflower honey.', price: 4.5, diet: ['V', 'GF'] },
      { name: 'Hot chocolate', description: 'Dark Belgian chocolate melted into steamed milk, with a marshmallow.', price: 4.2, diet: ['V', 'GF'] },
      { name: 'Loose-leaf tea pot', description: 'English breakfast, Earl Grey, sencha, peppermint or rooibos.', price: 3.5, diet: ['VG', 'GF'] }
    ]
  },
  {
    id: 'brunch',
    title: 'Breakfast & brunch',
    note: 'Served until 2 pm, every day. Eggs come from Hollis Farm down the road.',
    items: [
      { name: 'Smashed avocado on sourdough', description: 'Lemon, chilli flakes, pumpkin seeds and two poached eggs.', price: 10.5, diet: ['V'] },
      { name: 'Bramble breakfast', description: 'Two fried eggs, smoked bacon, roast tomato, mushrooms and toast.', price: 12.9 },
      { name: 'Buttermilk pancakes', description: 'Stack of three with blackberry compote, maple syrup and cream.', price: 9.8, diet: ['V'] },
      { name: 'Shakshuka', description: 'Eggs baked in spiced tomato and pepper sauce, feta, warm flatbread.', price: 11.2, diet: ['V'] },
      { name: 'Granola bowl', description: 'House granola, thick yoghurt, stewed fruit and honey.', price: 7.5, diet: ['V'] },
      { name: 'Porridge with berries', description: 'Oats cooked in oat milk, with berries and toasted seeds.', price: 6.5, diet: ['VG'] }
    ]
  },
  {
    id: 'lunch',
    title: 'Lunch',
    note: 'From 11:30 until we run out. Soup changes daily, ask at the counter.',
    items: [
      { name: 'Soup of the day', description: 'Served with a thick slice of buttered sourdough.', price: 7.2, diet: ['V'] },
      { name: 'Roast chicken & leek toastie', description: 'Cheddar, wholegrain mustard mayo, side salad.', price: 9.9 },
      { name: 'Halloumi & roasted veg bowl', description: 'Quinoa, charred courgette, peppers, tahini dressing.', price: 11.5, diet: ['V', 'GF'] },
      { name: 'Chickpea & spinach curry', description: 'Mild coconut curry with basmati rice and a lime wedge.', price: 10.4, diet: ['VG', 'GF'] },
      { name: 'Ploughman’s board', description: 'Local cheddar, ham, pickles, apple chutney, sourdough.', price: 12.5 },
      { name: 'Seasonal green salad', description: 'Whatever the farm sends this week, with a lemon-thyme dressing.', price: 8.9, diet: ['VG', 'GF'] }
    ]
  },
  {
    id: 'cakes',
    title: 'Cakes & pastries',
    note: 'Baked every morning in our own kitchen. When a cake is gone, it is gone.',
    items: [
      { name: 'Victoria sponge', description: 'Raspberry jam and vanilla cream between two light sponges.', price: 4.6, diet: ['V'] },
      { name: 'Baked lemon cheesecake', description: 'Buttery biscuit base, caramelised top, rose petals.', price: 5.2, diet: ['V'] },
      { name: 'Flourless chocolate cake', description: 'Dense, dark and gooey, with crème fraîche.', price: 5.0, diet: ['V', 'GF'] },
      { name: 'Cardamom bun', description: 'Soft, sticky and still warm before 10 am.', price: 3.8, diet: ['V'] },
      { name: 'Butter croissant', description: 'Laminated by hand, a little flaky chaos.', price: 3.2, diet: ['V'] },
      { name: 'Vegan banana loaf', description: 'Walnut, cinnamon and a spoon of peanut butter.', price: 3.9, diet: ['VG'] }
    ]
  }
]

export const cafeHours: { days: string; time: string }[] = [
  { days: 'Monday to Friday', time: '7:30 am – 5:00 pm' },
  { days: 'Saturday', time: '8:00 am – 5:00 pm' },
  { days: 'Sunday', time: '8:30 am – 3:00 pm' }
]

export const cafeContact = {
  street: '14 Alder Lane',
  town: 'Millbrook, Wexford Green, MB4 2QT',
  phone: '+1 (555) 014-2290',
  phoneHref: 'tel:+15550142290',
  email: 'hello@brambleandbean.example',
  emailHref: 'mailto:hello@brambleandbean.example'
}

export const cafeNav = [
  { to: '/cafe', label: 'Home' },
  { to: '/cafe/menu', label: 'Menu' },
  { to: '/cafe/about', label: 'About' },
  { to: '/cafe/contact', label: 'Contact' }
]

export function cafePrice(value: number): string {
  return `$${value.toFixed(2)}`
}
