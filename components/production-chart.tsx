"use client"

import { useState, useEffect } from "react"
import {
  Area, AreaChart, Bar, BarChart, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer, Legend, Tooltip,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Factory, Package, Truck } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslations } from "@/hooks/use-language"
import { supabase } from "@/lib/supabase"

interface ProductionDataItem {
  label: string
  produksi: number
  penjualan: number
}

const PRIMARY_COLOR = "#c53030"
const SECONDARY_COLOR = "#525252"

// Fallback dummy data for demo
const fallbackData: ProductionDataItem[] = [
  { label: "Jan", produksi: 850, penjualan: 780 },
  { label: "Feb", produksi: 920, penjualan: 850 },
  { label: "Mar", produksi: 890, penjualan: 870 },
  { label: "Apr", produksi: 950, penjualan: 920 },
  { label: "May", produksi: 1020, penjualan: 980 },
  { label: "Jun", produksi: 980, penjualan: 950 },
]

export function ProductionChart() {
  const t = useTranslations()
  const [productionData, setProductionData] = useState<ProductionDataItem[]>(fallbackData)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProductionData = async () => {
      try {
        setIsLoading(true)
        
        const { data, error } = await supabase
          .from("data_produksi")
          .select("label, produksi, penjualan")
          .order("label", { ascending: true })

        if (error) {
          console.error("Supabase Error:", error.message)
          setProductionData(fallbackData)
          return
        }

        if (data && data.length > 0) {
          const formattedData = data.map((item: ProductionDataItem) => ({
            label: String(item.label),
            produksi: Number(item.produksi) || 0,
            penjualan: Number(item.penjualan) || 0,
          }))
          setProductionData(formattedData)
        } else {
          setProductionData(fallbackData)
        }
      } catch (err) {
        console.error("Error fetching data:", err)
        setProductionData(fallbackData)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProductionData()
  }, [])

  const metrics = [
    { 
      icon: Factory, 
      value: "28,500", 
      label: t.dashboard.metrics.dailyProduction, 
      unit: "Ton",
      change: "+5.2%" 
    },
    { 
      icon: TrendingUp, 
      value: "97.8%", 
      label: t.dashboard.metrics.efficiency, 
      unit: "",
      change: "+1.2%" 
    },
    { 
      icon: Package, 
      value: "185,000", 
      label: t.dashboard.metrics.inventory, 
      unit: "Ton",
      change: "+8.4%" 
    },
    { 
      icon: Truck, 
      value: "142", 
      label: t.dashboard.metrics.shipments, 
      unit: "",
      change: "+12%" 
    },
  ]

  return (
    <section id="dashboard" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t.dashboard.label}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">{t.dashboard.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.dashboard.subtitle}</p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover:shadow-md transition-shadow">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <metric.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-foreground">
                    {metric.value}
                    {metric.unit && <span className="text-sm font-normal text-muted-foreground ml-1">{metric.unit}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{metric.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">{t.dashboard.productionTrend}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  {isLoading ? (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      {t.dashboard.loading}
                    </div>
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={productionData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                        <XAxis dataKey="label" tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                        <YAxis tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'var(--card)', 
                            border: '1px solid var(--border)',
                            borderRadius: '8px'
                          }} 
                        />
                        <Legend verticalAlign="top" height={36} />
                        <Area 
                          type="monotone" 
                          dataKey="produksi" 
                          stroke={PRIMARY_COLOR} 
                          fill={PRIMARY_COLOR} 
                          fillOpacity={0.1} 
                          name={t.dashboard.legend.production} 
                        />
                        <Area 
                          type="monotone" 
                          dataKey="penjualan" 
                          stroke={SECONDARY_COLOR} 
                          fill="transparent" 
                          name={t.dashboard.legend.sales} 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">{t.dashboard.outputComparison}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  {!isLoading && (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={productionData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                        <XAxis dataKey="label" tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                        <YAxis tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'var(--card)', 
                            border: '1px solid var(--border)',
                            borderRadius: '8px'
                          }} 
                        />
                        <Legend verticalAlign="top" height={36} />
                        <Bar 
                          dataKey="produksi" 
                          fill={PRIMARY_COLOR} 
                          radius={[4, 4, 0, 0]} 
                          name={t.dashboard.legend.production} 
                        />
                        <Bar 
                          dataKey="penjualan" 
                          fill={SECONDARY_COLOR} 
                          radius={[4, 4, 0, 0]} 
                          name={t.dashboard.legend.sales} 
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
