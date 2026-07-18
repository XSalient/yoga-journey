import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField } from './FormField';
import { Button } from './Button';
import { enquiryFormSchema, type EnquiryFormData } from '@/lib/validation';

const TRAVEL_INTERESTS = [
  { value: 'bespoke-fit', label: 'Bespoke FIT' },
  { value: 'curated-group', label: 'Curated Group Journey' },
  { value: 'corporate-mice', label: 'Corporate or MICE' },
  { value: 'yoga-spiritual', label: 'Yoga and Spiritual Retreat' },
  { value: 'himalayan', label: 'Himalayan Trekking' },
  { value: 'adventure-biking', label: 'Adventure Biking' },
  { value: 'kerala-ayurveda', label: 'Kerala Ayurveda and Wellness' },
  { value: 'cultural-india', label: 'Cultural India Journey' },
  { value: 'wellness-cruise', label: 'Yoga and Wellness Cruise' },
  { value: 'not-sure', label: 'Not Sure Yet' },
  { value: 'other', label: 'Other' },
];

const TRAVELLER_COUNTS = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3-5', label: '3–5' },
  { value: '6-10', label: '6–10' },
  { value: '11-20', label: '11–20' },
  { value: '21+', label: '21+' },
];

interface EnquiryFormProps {
  prefillExperience?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ prefillExperience }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const methods = useForm<EnquiryFormData>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      travelInterest: prefillExperience || '',
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('Form data:', data);
      setSubmitStatus('success');
      methods.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {submitStatus === 'success' && (
        <div className="mb-8 p-6 rounded-md bg-green-50 border-l-4 border-success">
          <h3 className="text-h3 text-success mb-2">Thank You</h3>
          <p className="text-body text-success">
            Your journey enquiry has been received. A Journey Within representative will contact you after reviewing your request.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-8 p-6 rounded-md bg-red-50 border-l-4 border-error">
          <h3 className="text-h3 text-error mb-2">Submission Error</h3>
          <p className="text-body text-error">
            We could not send your enquiry. Please try again or contact us through WhatsApp.
          </p>
        </div>
      )}

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
          <fieldset>
            <legend className="text-body font-semibold text-text-primary mb-6">
              Required Information
            </legend>

            <FormField name="fullName" label="Full Name" placeholder="John Smith" required />
            <FormField name="email" label="Email Address" type="email" placeholder="you@example.com" required />
            <FormField
              name="country"
              label="Country of Residence"
              as="select"
              required
              options={[
                { value: 'us', label: 'United States' },
                { value: 'uk', label: 'United Kingdom' },
                { value: 'in', label: 'India' },
                { value: 'au', label: 'Australia' },
                { value: 'ca', label: 'Canada' },
              ]}
            />
            <FormField
              name="travelInterest"
              label="What brings you to Journey Within?"
              as="select"
              required
              options={TRAVEL_INTERESTS}
            />
            <FormField
              name="travellers"
              label="Number of Travellers"
              as="select"
              required
              options={TRAVELLER_COUNTS}
            />
            <FormField
              name="message"
              label="Tell us more about your interests"
              as="textarea"
              rows={6}
              placeholder="Share your interests, preferred pace, comfort level, important requirements..."
              required
            />

            <input type="hidden" {...methods.register('url')} />

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                {...methods.register('consent')}
                className="mt-1 h-5 w-5 rounded accent-forest-500"
              />
              <label htmlFor="consent" className="text-body-sm text-text-muted">
                I agree that Journey Within may use the information submitted here to respond to my enquiry. See the{' '}
                <a href="/privacy" className="text-forest-500 hover:underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-body font-semibold text-text-primary mb-6">
              Optional Information
            </legend>
            <FormField name="whatsapp" label="WhatsApp or Phone Number" placeholder="+1 (555) 000-0000" helperText="Include country code" />
            <FormField name="travelDates" label="Preferred Travel Dates" placeholder="e.g., March 2024" helperText="Flexible dates welcome" />
            <FormField name="duration" label="How long would you like to travel?" placeholder="e.g., 7 days, 2 weeks" />
            <FormField name="budget" label="Approximate Budget" placeholder="Budget per person, excluding flights" helperText="Helps us understand your travel style" />
          </fieldset>

          <Button type="submit" variant="primary" size="lg" fullWidth isLoading={isSubmitting} disabled={submitStatus === 'success'}>
            {submitStatus === 'success' ? 'Thank You' : 'Submit Enquiry'}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
