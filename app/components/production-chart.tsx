"use client"

import { useState, useEffect } from "react"
import {
  Area, AreaChart, Bar, BarChart, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer, Legend, Tooltip,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
// @ts-ignore
import { TrendingUp, Factory, Package, Truck } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface ProductionDataItem {
  label: string
  produksi: number
  penjualan: number
}

const PRIMARY_COLOR = "#c53030"
const SECONDARY_COLOR = "#525252"

export function ProductionChart() {
  const [productionData, setProductionData] = useState<ProductionDataItem[]>([])
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
          return
        }

        if (data) {
          const formattedData = data.map((item: any) => ({
            label: String(item.label),
            produksi: Number(item.produksi) || 0,
            penjualan: Number(item.penjualan) || 0,
          }))
          setProductionData(formattedData)
        }
      } catch (err) {
        console.error("Error mengambil data:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProductionData()
  }, [])

  return (
    <section id="produksi" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Data Produksi</span>
          <h2 className="mt-4 text-3xl font-bold text-foreground">Grafik Real-time Pabrik</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Tren Produksi & Penjualan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                {isLoading ? (
                  <div className="flex items-center justify-center h-full">Memuat data...</div>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={productionData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="label" />
                      <YAxis />
                      <Tooltip />
                      <Legend verticalAlign="top" height={36}/>
                      <Area type="monotone" dataKey="produksi" stroke={PRIMARY_COLOR} fill={PRIMARY_COLOR} fillOpacity={0.1} name="Produksi" />
                      <Area type="monotone" dataKey="penjualan" stroke={SECONDARY_COLOR} fill="transparent" name="Penjualan" />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Perbandingan Output</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                {!isLoading && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={productionData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="label" />
                      <YAxis />
                      <Tooltip />
                      <Legend verticalAlign="top" height={36}/>
                      <Bar dataKey="produksi" fill={PRIMARY_COLOR} radius={[4, 4, 0, 0]} name="Produksi" />
                      <Bar dataKey="penjualan" fill={SECONDARY_COLOR} radius={[4, 4, 0, 0]} name="Penjualan" />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}