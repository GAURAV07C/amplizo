"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { 
  Store, 
  ShoppingCart, 
  Package, 
  DollarSign, 
  TrendingUp, 
  Users,
  Plus,
  Edit,
  Trash2,
  Eye,
  ExternalLink,
  CheckCircle,
  Clock,
  AlertCircle,
  Upload,
  Image as ImageIcon,
  X
} from "lucide-react"

type ProductListing = {
  id: string
  name: string
  platform: string
  status: "active" | "pending" | "error"
  price: number
  views: number
  orders: number
  revenue: number
}

type StoreLogo = {
  id: string
  name: string
  platform: string
  logo: string | null
  website: string
}

const mockListings: ProductListing[] = [
  { id: "1", name: "Premium Yoga Mat", platform: "Etsy", status: "active", price: 2999, views: 1250, orders: 45, revenue: 134955 },
  { id: "2", name: "Organic Face Serum", platform: "Shopify", status: "active", price: 899, views: 890, orders: 78, revenue: 70022 },
  { id: "3", name: "Handmade Candle Set", platform: "Etsy", status: "active", price: 599, views: 2100, orders: 120, revenue: 71880 },
  { id: "4", name: "Wireless Earbuds", platform: "Amazon", status: "pending", price: 2499, views: 0, orders: 0, revenue: 0 },
  { id: "5", name: "Leather Wallet", platform: "Flipkart", status: "error", price: 1499, views: 340, orders: 12, revenue: 17988 },
]

const mockStoreLogos: StoreLogo[] = [
  { id: "1", name: "My Craft Store", platform: "Etsy", logo: null, website: "mycraftstore.etsy.com" },
  { id: "2", name: "Fashion Hub", platform: "Amazon", logo: null, website: "fashionhub.amazon.in" },
  { id: "3", name: "Home Decor India", platform: "Flipkart", logo: null, website: "homedecorindia.flipkart.com" },
  { id: "4", name: "Tech Gadgets", platform: "eBay", logo: null, website: "techgadgets.ebay.com" },
]

const platforms = [
  { 
    id: "etsy", 
    name: "Etsy", 
    icon: Store, 
    color: "bg-orange-500", 
    description: "List handmade, vintage items and craft supplies",
    features: ["Multi-variant products", "Custom profiles", "SEO tools", "Analytics"]
  },
  { 
    id: "ebay", 
    name: "eBay", 
    icon: ShoppingCart, 
    color: "bg-blue-500", 
    description: "Global marketplace for new and used items",
    features: ["Global reach", "Auction options", "Multi-quantity", "International shipping"]
  },
  { 
    id: "amazon", 
    name: "Amazon", 
    icon: Package, 
    color: "bg-yellow-500", 
    description: "India's largest e-commerce marketplace",
    features: ["Prime eligibility", "FBA support", "Brand registry", "Advertising"]
  },
  { 
    id: "flipkart", 
    name: "Flipkart", 
    icon: Store, 
    color: "bg-blue-600", 
    description: "Leading Indian e-commerce platform",
    features: ["Large customer base", "Easy onboarding", "Logistics support", "Advertising"]
  },
  { 
    id: "meesho", 
    name: "Meesho", 
    icon: ShoppingCart, 
    color: "bg-pink-500", 
    description: "India's largest reselling platform",
    features: ["Zero inventory", "Social selling", "Low investment", "Pan-India reach"]
  },
  { 
    id: "shopify", 
    name: "Shopify", 
    icon: Store, 
    color: "bg-green-500", 
    description: "Build your own online store",
    features: ["Custom domain", "100+ themes", "Apps & plugins", "24/7 support"]
  },
]

export default function EcommercePage() {
  const [activeTab, setActiveTab] = useState("listings")
  const [storeLogos, setStoreLogos] = useState(mockStoreLogos)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploadingFor, setUploadingFor] = useState<string | null>(null)

  const totalRevenue = mockListings.reduce((sum, l) => sum + l.revenue, 0)
  const totalOrders = mockListings.reduce((sum, l) => sum + l.orders, 0)
  const totalViews = mockListings.reduce((sum, l) => sum + l.views, 0)
  const activeListings = mockListings.filter(l => l.status === "active").length

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>, storeId: string) => {
    const file = e.target.files?.[0]
    if (file) {
      // In production, this would upload to a server
      const reader = new FileReader()
      reader.onloadend = () => {
        setStoreLogos(prev => prev.map(store => 
          store.id === storeId 
            ? { ...store, logo: reader.result as string }
            : store
        ))
      }
      reader.readAsDataURL(file)
    }
    setUploadingFor(null)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-950">E-Commerce Hub</h1>
          <p className="text-slate-500">Manage your product listings across multiple marketplaces</p>
        </div>
        <Button className="btn-animate btn-shine bg-primary text-primary-foreground">
          <Plus className="mr-2 h-4 w-4" />
          Add New Product
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="card-hover border-l-4 border-l-primary">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Total Revenue</p>
                <p className="text-2xl font-bold text-slate-950">₹{totalRevenue.toLocaleString()}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1 text-sm text-green-600">
              <TrendingUp className="h-4 w-4" />
              <span>+12.5% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover border-l-4 border-l-secondary">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Total Orders</p>
                <p className="text-2xl font-bold text-slate-950">{totalOrders}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                <Package className="h-6 w-6 text-secondary" />
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1 text-sm text-green-600">
              <TrendingUp className="h-4 w-4" />
              <span>+8.2% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover border-l-4 border-l-amber-500">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Total Views</p>
                <p className="text-2xl font-bold text-slate-950">{totalViews.toLocaleString()}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                <Eye className="h-6 w-6 text-amber-500" />
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1 text-sm text-green-600">
              <TrendingUp className="h-4 w-4" />
              <span>+23.1% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover border-l-4 border-l-green-500">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Active Listings</p>
                <p className="text-2xl font-bold text-slate-950">{activeListings}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1 text-sm text-slate-500">
              <span>{mockListings.length} total products</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 lg:w-[500px]">
          <TabsTrigger value="listings" className="gap-2">
            <Package className="h-4 w-4" />
            Listings
          </TabsTrigger>
          <TabsTrigger value="platforms" className="gap-2">
            <Store className="h-4 w-4" />
            Platforms
          </TabsTrigger>
          <TabsTrigger value="logos" className="gap-2">
            <ImageIcon className="h-4 w-4" />
            Store Logos
          </TabsTrigger>
          <TabsTrigger value="leads" className="gap-2">
            <Users className="h-4 w-4" />
            Leads
          </TabsTrigger>
        </TabsList>

        <TabsContent value="listings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Listings</CardTitle>
              <CardDescription>Manage your products across all marketplaces</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl border overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">Product</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">Platform</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">Status</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-slate-600">Price</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-slate-600">Views</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-slate-600">Orders</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-slate-600">Revenue</th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-slate-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {mockListings.map((listing) => (
                      <tr key={listing.id} className="hover:bg-slate-50/50">
                        <td className="px-4 py-3">
                          <p className="font-medium text-slate-950">{listing.name}</p>
                        </td>
                        <td className="px-4 py-3">
                          <Badge variant="outline" className="gap-1">
                            {listing.platform}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          {listing.status === "active" && (
                            <Badge className="gap-1 bg-green-100 text-green-700 hover:bg-green-100">
                              <CheckCircle className="h-3 w-3" />
                              Active
                            </Badge>
                          )}
                          {listing.status === "pending" && (
                            <Badge className="gap-1 bg-amber-100 text-amber-700 hover:bg-amber-100">
                              <Clock className="h-3 w-3" />
                              Pending
                            </Badge>
                          )}
                          {listing.status === "error" && (
                            <Badge className="gap-1 bg-red-100 text-red-700 hover:bg-red-100">
                              <AlertCircle className="h-3 w-3" />
                              Error
                            </Badge>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right font-medium">₹{listing.price.toLocaleString()}</td>
                        <td className="px-4 py-3 text-right text-slate-600">{listing.views.toLocaleString()}</td>
                        <td className="px-4 py-3 text-right text-slate-600">{listing.orders}</td>
                        <td className="px-4 py-3 text-right font-medium text-green-600">₹{listing.revenue.toLocaleString()}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-center gap-1">
                            <Button variant="ghost" size="icon-sm" className="h-8 w-8 hover:bg-primary/10 hover:text-primary">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon-sm" className="h-8 w-8 hover:bg-primary/10 hover:text-primary">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon-sm" className="h-8 w-8 hover:bg-red-50 hover:text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="platforms" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => {
              const Icon = platform.icon
              return (
                <Card key={platform.id} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${platform.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{platform.name}</CardTitle>
                        <CardDescription className="text-sm">{platform.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {platform.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full btn-animate" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Connect {platform.name}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="leads" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Lead Management</CardTitle>
              <CardDescription>Track customer inquiries and convert them to sales</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl border bg-slate-50 p-12 text-center">
                <Users className="mx-auto h-12 w-12 text-slate-300" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">No leads yet</h3>
                <p className="mt-2 text-slate-500">Connect your first product to start generating leads from customers.</p>
                <Button className="mt-4 btn-animate">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Product
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Store Logos Tab */}
        <TabsContent value="logos" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Store Logos</CardTitle>
              <CardDescription>Upload and manage client store logos for display on your website</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-slate-600 mb-4">
                  Upload your client's store logos. These will be displayed on the website to showcase your e-commerce work.
                </p>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {storeLogos.map((store) => (
                    <div 
                      key={store.id} 
                      className="relative rounded-xl border bg-white p-4 shadow-sm transition-all hover:shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        {/* Logo Preview */}
                        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 border-dashed border-slate-200 bg-slate-50">
                          {store.logo ? (
                            <Image 
                              src={store.logo} 
                              alt={store.name}
                              fill
                              className="object-contain p-1"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <ImageIcon className="h-8 w-8 text-slate-300" />
                            </div>
                          )}
                        </div>
                        
                        {/* Store Info */}
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-slate-950 truncate">{store.name}</p>
                          <p className="text-sm text-slate-500">{store.platform}</p>
                          <p className="text-xs text-slate-400 truncate">{store.website}</p>
                        </div>
                      </div>
                      
                      {/* Upload Button */}
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleLogoUpload(e, store.id)}
                      />
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-3 w-full"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        {store.logo ? 'Change Logo' : 'Upload Logo'}
                      </Button>
                    </div>
                  ))}
                  
                  {/* Add New Store */}
                  <button className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 p-4 transition-all hover:border-violet-300 hover:bg-violet-50">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-100">
                      <Plus className="h-6 w-6 text-violet-600" />
                    </div>
                    <p className="mt-2 text-sm font-medium text-slate-600">Add New Store</p>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Benefits Section */}
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-950">Maximize Your Reach</h3>
              <p className="text-slate-600">List once, sell everywhere. Expand your business across multiple platforms.</p>
            </div>
            <div className="flex gap-3">
              <Button className="btn-animate btn-glow" variant="default">
                Start Selling
              </Button>
              <Button className="btn-animate" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
