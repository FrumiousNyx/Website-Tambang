"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "@/hooks/use-language"
import { supabase } from "@/lib/supabase"

interface LeadFormProps {
  variant?: "full" | "compact"
}

export function LeadForm({ variant = "full" }: LeadFormProps) {
  const t = useTranslations()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    projectValue: "",
    projectLocation: "",
    timeline: "",
    message: "",
    requestProposal: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const { error: supabaseError } = await supabase
        .from("leads")
        .insert([
          {
            name: formData.name,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            project_type: formData.projectType,
            project_value: formData.projectValue,
            project_location: formData.projectLocation,
            timeline: formData.timeline,
            message: formData.message,
            request_proposal: formData.requestProposal,
            created_at: new Date().toISOString(),
          },
        ])

      if (supabaseError) {
        throw supabaseError
      }

      setIsSuccess(true)
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        projectType: "",
        projectValue: "",
        projectLocation: "",
        timeline: "",
        message: "",
        requestProposal: false,
      })
    } catch (err) {
      console.error("Form submission error:", err)
      setError(t.leadForm.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card className="bg-card border-border">
        <CardContent className="p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground">{t.leadForm.success}</h3>
            <p className="mt-2 text-muted-foreground">{t.leadForm.successDescription}</p>
            <Button 
              onClick={() => setIsSuccess(false)} 
              variant="outline" 
              className="mt-6"
            >
              {t.common.close}
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6 lg:p-8">
        <h3 className="text-xl font-bold text-card-foreground">{t.leadForm.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{t.leadForm.subtitle}</p>
        
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* Name & Company */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t.leadForm.fields.name} *</Label>
              <Input
                id="name"
                required
                placeholder={t.leadForm.fields.namePlaceholder}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">{t.leadForm.fields.company} *</Label>
              <Input
                id="company"
                required
                placeholder={t.leadForm.fields.companyPlaceholder}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-background border-border"
              />
            </div>
          </div>
          
          {/* Email & Phone */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t.leadForm.fields.email} *</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder={t.leadForm.fields.emailPlaceholder}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t.leadForm.fields.phone} *</Label>
              <Input
                id="phone"
                type="tel"
                required
                placeholder={t.leadForm.fields.phonePlaceholder}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-background border-border"
              />
            </div>
          </div>

          {/* Project Type & Value */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectType">{t.leadForm.fields.projectType} *</Label>
              <Select
                value={formData.projectType}
                onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                required
              >
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder={t.leadForm.fields.projectTypePlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {t.leadForm.fields.projectTypeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectValue">{t.leadForm.fields.projectValue} *</Label>
              <Select
                value={formData.projectValue}
                onValueChange={(value) => setFormData({ ...formData, projectValue: value })}
                required
              >
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder={t.leadForm.fields.projectValuePlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {t.leadForm.fields.projectValueOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Location & Timeline */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectLocation">{t.leadForm.fields.projectLocation} *</Label>
              <Input
                id="projectLocation"
                required
                placeholder={t.leadForm.fields.projectLocationPlaceholder}
                value={formData.projectLocation}
                onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                className="bg-background border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeline">{t.leadForm.fields.timeline} *</Label>
              <Select
                value={formData.timeline}
                onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                required
              >
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder={t.leadForm.fields.timelinePlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {t.leadForm.fields.timelineOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">{t.leadForm.fields.message}</Label>
            <Textarea
              id="message"
              placeholder={t.leadForm.fields.messagePlaceholder}
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background border-border resize-none"
            />
          </div>

          {/* Request Proposal Checkbox */}
          <div className="flex items-start space-x-3 p-4 bg-muted rounded-lg border border-border">
            <Checkbox
              id="requestProposal"
              checked={formData.requestProposal}
              onCheckedChange={(checked) => setFormData({ ...formData, requestProposal: checked as boolean })}
            />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="requestProposal" className="text-sm font-medium cursor-pointer">
                {t.leadForm.fields.requestProposal}
              </Label>
              <p className="text-xs text-muted-foreground">
                {t.leadForm.fields.requestProposalDescription}
              </p>
            </div>
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                {t.leadForm.submitting}
              </>
            ) : (
              t.leadForm.submit
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
