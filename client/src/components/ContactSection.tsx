import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { contactFormSchema } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

type FormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      const response = await apiRequest('POST', '/api/contact', data);
      const result = await response.json();
      
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-2 border-b border-[rgba(0,0,0,0.1)]">
      <div className="p-8 md:p-12 border-r border-[rgba(0,0,0,0.1)]">
        <h2 className="text-2xl font-semibold mb-8">GET IN TOUCH</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full border border-[#232323]/10 p-3 bg-transparent" 
                placeholder="John Doe"
                {...register('name')}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full border border-[#232323]/10 p-3 bg-transparent" 
                placeholder="john@example.com"
                {...register('email')}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm mb-2">Subject</label>
            <input 
              type="text" 
              id="subject" 
              className="w-full border border-[#232323]/10 p-3 bg-transparent" 
              placeholder="Project Inquiry"
              {...register('subject')}
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm mb-2">Message</label>
            <textarea 
              id="message" 
              rows={4} 
              className="w-full border border-[#232323]/10 p-3 bg-transparent" 
              placeholder="Tell us about your project..."
              {...register('message')}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>
          <button 
            type="submit" 
            className="bg-[#232323] text-white py-3 px-6 hover:bg-[#232323]/90 transition disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className="p-8 md:p-12">
        <h2 className="text-2xl font-semibold mb-8">OUR LOCATIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium mb-4">HEADQUARTERS</h3>
            <address className="not-italic mb-6">
              VIA NAZIONALE 73B<br />
              MILAN, ITALY 20123<br />
              +39 02 1234 5678
            </address>
            
            <h3 className="font-medium mb-4">LONDON OFFICE</h3>
            <address className="not-italic">
              MAIN STREET 17<br />
              LONDON, UK 2VT4D3<br />
              +44 20 1234 5678
            </address>
          </div>
          <div>
            <h3 className="font-medium mb-4">SYDNEY OFFICE</h3>
            <address className="not-italic mb-6">
              92 THE AVENUE<br />
              SYDNEY, AUSTRALIA<br />
              +61 2 1234 5678
            </address>
            
            <h3 className="font-medium mb-4">CONTACT US</h3>
            <p className="mb-4">INFO@NOVACONSTRUCT.COM</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#917b53] transition">LINKEDIN</a>
              <a href="#" className="hover:text-[#917b53] transition">TWITTER</a>
              <a href="#" className="hover:text-[#917b53] transition">FACEBOOK</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
