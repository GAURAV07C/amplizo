import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Store, 
  ShoppingCart, 
  Package, 
  Globe, 
  ArrowRight, 
  TrendingUp,
  Users,
  DollarSign,
  Eye,
  MousePointer,
  Target,
  BarChart3,
  CheckCircle,
  Star
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getSiteContent } from "@/lib/content-store"

export const metadata: Metadata = {
  title: "E-Commerce Stores | Amplizo - Build Profitable Online Stores",
  description: "We create beautiful online stores on Etsy, eBay, Amazon, Flipkart, Meesho, Shopify and more. Get more sales and grow your business.",
}

// Client stores - these will be shown on the website
const clientStores = [
  {
    id: "1",
    name: "Crafty Creations",
    owner: "Priya Sharma",
    platform: "Etsy",
    logo: null, // Will show default icon
    tagline: "Handmade Jewelry & Accessories",
    monthlyRevenue: "₹45,000",
    growth: "+120%",
    orders: 180,
    image: "/images/stores/crafty-creations.jpg"
  },
  {
    id: "2", 
    name: "Tech Hub",
    owner: "Rahul Kumar",
    platform: "Amazon",
    logo: null,
    tagline: "Electronics & Gadgets",
    monthlyRevenue: "₹1,20,000",
    growth: "+85%",
    orders: 450,
    image: "/images/stores/tech-hub.jpg"
  },
  {
    id: "3",
    name: "Fashion Fiesta", 
    owner: "Anita Desai",
    platform: "Flipkart",
    logo: null,
    tagline: "Trendy Fashion Wear",
    monthlyRevenue: "₹80,000",
    growth: "+200%",
    orders: 320,
    image: "/images/stores/fashion-fiesta.jpg"
  },
  {
    id: "4",
    name: "Home Decor India",
    owner: "Vikram Singh",
    platform: "Meesho",
    logo: null,
    tagline: "Home & Living Products",
    monthlyRevenue: "₹35,000",
    growth: "+150%",
    orders: 280,
    image: "/images/stores/home-decor.jpg"
  },
  {
    id: "5",
    name: "Beauty Bliss",
    owner: "Dr. Meera Patel",
    platform: "Shopify",
    logo: null,
    tagline: "Organic Skincare & Beauty",
    monthlyRevenue: "₹65,000",
    growth: "+95%",
    orders: 195,
    image: "/images/stores/beauty-bliss.jpg"
  },
  {
    id: "6",
    name: "Sports Zone",
    owner: "Sanjay Gupta",
    platform: "Amazon",
    logo: null,
    tagline: "Sports & Fitness Equipment",
    monthlyRevenue: "₹95,000",
    growth: "+175%",
    orders: 380,
    image: "/images/stores/sports-zone.jpg"
  }
]

const platforms = [
  { id: "etsy", name: "Etsy", color: "#F56400", icon: Store },
  { id: "ebay", name: "eBay", color: "#E53238", icon: ShoppingCart },
  { id: "amazon", name: "Amazon", color: "#FF9900", icon: Package },
  { id: "flipkart", name: "Flipkart", color: "#2874F0", icon: Store },
  { id: "meesho", name: "Meesho", color: "#F43394", icon: ShoppingCart },
  { id: "shopify", name: "Shopify", color: "#96BF48", icon: Globe },
]

const howItWorks = [
  {
    step: "01",
    title: "Choose Your Platform",
    description: "Select where you want to sell - Etsy, Amazon, Flipkart, Meesho, or your own Shopify store",
    icon: Target
  },
  {
    step: "02", 
    title: "We Build Your Store",
    description: "Our experts create a professional store with optimized listings, images, and descriptions",
    icon: Store
  },
  {
    step: "03",
    title: "Launch & Promote",
    description: "Your store goes live with SEO optimization and marketing to attract customers",
    icon: MousePointer
  },
  {
    step: "04",
    title: "You Earn Profit",
    description: "Start getting orders and grow your revenue with our ongoing support",
    icon: DollarSign
  }
]

export default async function EcommercePage() {
  const content = await getSiteContent()

  return (
    <main className="min-h-screen">
      <Navbar content={content.navbar} site={content.site} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-violet-50 via-white to-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">
              🏪 E-Commerce Solutions
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
              Build Your
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"> Profitable Store</span>
            </h1>
            <p className="mb-8 text-xl text-slate-600 md:text-2xl">
              We create stunning online stores on Etsy, Amazon, Flipkart, Meesho, Shopify and more. 
              Turn your products into consistent sales.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="btn-animate btn-shine bg-violet-600 text-white hover:bg-violet-700" asChild>
                <Link href="#contact">
                  Start Your Store
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-violet-200 text-violet-700 hover:bg-violet-50" asChild>
                <Link href="#stores">
                  View Our Work
                </Link>
              </Button>
            </div>
            
            {/* Hero Stats */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <p className="text-3xl font-bold text-violet-600">150+</p>
                <p className="text-sm text-slate-500">Stores Built</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-violet-600">₹5Cr+</p>
                <p className="text-sm text-slate-500">Client Revenue</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-violet-600">6</p>
                <p className="text-sm text-slate-500">Platforms</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-violet-600">4.9★</p>
                <p className="text-sm text-slate-500">Client Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Stores Section */}
      <section id="stores" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">
              Stores We've Built
            </h2>
            <p className="text-lg text-slate-600">
              Real results from real clients. Click on any store to see how we helped them grow.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clientStores.map((store) => {
              const PlatformIcon = platforms.find(p => p.name.toLowerCase() === store.platform.toLowerCase())?.icon || Store
              const platformColor = platforms.find(p => p.name.toLowerCase() === store.platform.toLowerCase())?.color || '#8B5CF6'
              
              return (
                <Link 
                  key={store.id} 
                  href={`/contact?store=${store.id}`}
                  className="group"
                >
                  <Card className="card-hover h-full cursor-pointer overflow-hidden border-2 border-transparent bg-white shadow-lg transition-all duration-300 hover:border-violet-300 hover:shadow-violet-500/20">
                    {/* Store Banner */}
                    <div className="relative h-32 bg-gradient-to-r from-violet-500 to-purple-500">
                      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20" />
                    </div>
                    
                    <CardContent className="relative pt-0">
                      {/* Logo Circle */}
                      <div 
                        className="absolute -top-12 left-4 flex items-center justify-center rounded-2xl border-4 border-white bg-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                        style={{ width: '72px', height: '72px' }}
                      >
                        {store.logo ? (
                          <Image src={store.logo} alt={store.name} fill className="rounded-xl object-contain p-1" />
                        ) : (
                          <div 
                            className="flex items-center justify-center rounded-xl"
                            style={{ backgroundColor: `${platformColor}15`, width: '56px', height: '56px' }}
                          >
                            <PlatformIcon style={{ color: platformColor, width: '28px', height: '28px' }} />
                          </div>
                        )}
                      </div>
                      
                      {/* Platform Badge */}
                      <div className="flex justify-end pt-3">
                        <Badge 
                          className="font-medium"
                          style={{ backgroundColor: `${platformColor}15`, color: platformColor }}
                        >
                          {store.platform}
                        </Badge>
                      </div>
                      
                      {/* Store Info */}
                      <div className="mt-4">
                        <h3 className="text-xl font-bold text-slate-950 group-hover:text-violet-600 transition-colors">
                          {store.name}
                        </h3>
                        <p className="text-sm text-slate-500">{store.tagline}</p>
                        
                        {/* Stats */}
                        <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-slate-50 p-3">
                          <div className="text-center">
                            <p className="text-lg font-bold text-slate-950">{store.monthlyRevenue}</p>
                            <p className="text-xs text-slate-500">Revenue</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-green-600">{store.growth}</p>
                            <p className="text-xs text-slate-500">Growth</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-slate-950">{store.orders}</p>
                            <p className="text-xs text-slate-500">Orders</p>
                          </div>
                        </div>
                        
                        {/* View Button */}
                        <div className="mt-4 flex items-center justify-center gap-1 text-violet-600 opacity-0 transition-opacity group-hover:opacity-100">
                          <span className="text-sm font-medium">Get Similar Store</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">
              How We Build Your Store
            </h2>
            <p className="text-lg text-slate-600">
              Simple 4-step process to get your profitable online store
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-4">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="relative text-center">
                {index < 3 && (
                  <div className="absolute right-0 top-12 hidden h-px w-full bg-violet-200 md:block" style={{ left: '50%', width: 'calc(100% - 60px)' }} />
                )}
                <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 hover:scale-110">
                  <item.icon className="h-8 w-8 text-violet-600" />
                </div>
                <div className="mb-2 inline-block rounded-full bg-violet-100 px-3 py-1 text-sm font-bold text-violet-600">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms We Work With */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">
              Platforms We Work With
            </h2>
            <p className="text-lg text-slate-600">
              We build and manage stores on all major e-commerce platforms
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform) => {
              const Icon = platform.icon
              return (
                <Link 
                  key={platform.id}
                  href={`/contact?platform=${platform.id}`}
                  className="group flex items-center gap-3 rounded-full border-2 border-slate-200 bg-white px-6 py-3 transition-all hover:border-violet-300 hover:shadow-lg"
                >
                  <Icon style={{ color: platform.color, width: '24px', height: '24px' }} />
                  <span className="font-medium text-slate-700 group-hover:text-violet-600">{platform.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Why Choose Amplizo for Your E-Commerce Store?
              </h2>
              <p className="mb-6 text-lg text-violet-100">
                We don't just build stores - we help you generate profit.
              </p>
              <div className="space-y-4">
                {[
                  "Professional store setup with your branding",
                  "SEO optimized product listings",
                  "High-quality product images & descriptions",
                  "Marketing support to get first sales",
                  "Ongoing support & management",
                  "Analytics dashboard to track growth"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur">
                <p className="text-sm text-violet-200">Average Client Results</p>
                <p className="my-4 text-5xl font-bold">₹60,000</p>
                <p className="text-violet-200">Average monthly revenue after 3 months</p>
                <Button size="lg" className="mt-6 bg-white text-violet-700 hover:bg-violet-50 btn-animate" asChild>
                  <Link href="#contact">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-violet-50 to-purple-50 p-8 md:p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">
              Ready to Build Your Profitable Store?
            </h2>
            <p className="mb-8 text-lg text-slate-600">
              Contact us today for a free consultation. We'll help you choose the right platform and build a store that generates sales.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="btn-animate btn-shine bg-violet-600 text-white hover:bg-violet-700" asChild>
                <Link href="/#contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-violet-200" asChild>
                <Link href="tel:+919876543210">
                  Call: +91 98765 43210
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer 
        content={content.footer} 
        logo={content.site.logo} 
        contactInfo={content.contact.info} 
      />
    </main>
  )
}
