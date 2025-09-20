"use client";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import ContactInfoWidget from "@/app/ui/Widget/ContactInfoWidget";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().min(1, "Phone is required"),
  message: z.string().min(1, "Message is required"),
});

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <>
      <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="We're here to help <br/> you grow"
              subtitle="Get in touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form onSubmit={handleSubmit(onSubmit)} className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">First Name*</label>
                <input
                  type="text"
                  className={`cs-form_field ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <div className="text-danger">{errors.firstName.message}</div>
                )}
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Last Name*</label>
                <input
                  type="text"
                  className={`cs-form_field ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <div className="text-danger">{errors.lastName.message}</div>
                )}
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input
                  type="email"
                  className={`cs-form_field ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  {...register("email")}
                />
                {errors.email && (
                  <div className="text-danger">{errors.email.message}</div>
                )}
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Phone*</label>
                <input
                  type="text"
                  className={`cs-form_field ${
                    errors.phone ? "is-invalid" : ""
                  }`}
                  {...register("phone")}
                />
                {errors.phone && (
                  <div className="text-danger">{errors.phone.message}</div>
                )}
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Message*</label>
                <textarea
                  cols="30"
                  rows="7"
                  className={`cs-form_field ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <div className="text-danger">{errors.message.message}</div>
                )}
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button type="submit" className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.6054143257384!2d-0.0748041!3d51.5571341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c8a74edec3b%3A0xf3f031f766655aa2!2s163%20Stoke%20Newington%20Rd%2C%20London%20N16%208BP%2C%20UK!5e0!3m2!1sen!2s!4v1732983086421!5m2!1sen!2s"
          loading="lazy"
          allowFullScreen
          title="Google Map"
        />
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}
