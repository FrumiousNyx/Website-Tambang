"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  shortName: string
  description: string
  features: string[]
  image: string
  badge?: string
  href: string
}

export function ProductCard({
  name,
  shortName,
  description,
  features,
  image,
  badge,
  href,
}: ProductCardProps) {
  return (
    <Card className="bg-card border-border overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {badge && (
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
            {badge}
          </Badge>
        )}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="text-2xl font-bold text-primary-foreground">{shortName}</span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <ul className="mt-4 space-y-2">
          {features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-card-foreground">
              <Check className="w-4 h-4 text-primary shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          asChild
          className="mt-6 w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 group-hover:gap-3 transition-all"
        >
          <Link href={href}>
            Lihat Detail
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
