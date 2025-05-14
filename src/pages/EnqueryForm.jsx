import React from 'react';
import { useForm } from 'react-hook-form';

const EnqueryForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!data.interest || data.interest.length === 0) {
      alert('Please select at least one area of interest.');
      return;
    }

    const formData = new FormData();
    formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');
    formData.append('subject', 'New Enquiry Form Submission');
    formData.append('Full Name', data.fullName);
    formData.append('Company Name', data.company);
    formData.append('Email', data.email);
    formData.append('WhatsApp', data.whatsapp);
    formData.append('Area of Interest', data.interest.join(', '));
    formData.append('Other', data.other || '');
    formData.append('Message', data.message || '');

    if (data.file && data.file.length > 0) {
      formData.append('file', data.file[0]);
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        alert('Form submitted successfully!');
        reset();
      } else {
        alert('Form submission failed!');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-6 border rounded space-y-4">
      <h2 className="text-lg font-bold">Enquiry Form</h2>

      <input {...register('fullName', { required: true })} placeholder="Full Name *" className="border p-2 w-full" />
      {errors.fullName && <span className="text-red-500 text-sm">Full Name is required</span>}

      <input {...register('company', { required: true })} placeholder="Company Name *" className="border p-2 w-full" />
      {errors.company && <span className="text-red-500 text-sm">Company Name is required</span>}

      <input type="email" {...register('email', { required: true })} placeholder="Email Address *" className="border p-2 w-full" />
      {errors.email && <span className="text-red-500 text-sm">Email is required</span>}

      <input type="text" {...register('whatsapp', { required: true })} placeholder="Mobile / WhatsApp Number *" className="border p-2 w-full" />
      {errors.whatsapp && <span className="text-red-500 text-sm">Mobile number is required</span>}

      <div>
        <label className="font-semibold">Area of Interest *</label>
        {[
          'PCB Testing Fixtures',
          'Special Purpose Machines (SPMs)',
          'Testing & Measuring Instruments',
          'SMT Consumables & Spare Parts',
        ].map((item) => (
          <label key={item} className="block">
            <input type="checkbox" value={item} {...register('interest')} className="mr-2" />
            {item}
          </label>
        ))}
      </div>

      <input type="text" {...register('other')} placeholder="Other Area of Interest" className="border p-2 w-full" />
      <div>Your Requirement/Message</div>
      <textarea {...register('message')} placeholder="Your Requirements / Message" className="border p-2 w-full" rows={4}></textarea>

      <div>
        <label className="font-semibold">Upload File (Optional)</label>
        <input type="file" {...register('file')} className="block mt-1" />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default EnqueryForm;
