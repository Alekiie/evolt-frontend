import React from "react";
import "./Services.css";
import {
  LandingPageImage,
  Car_Charging,
  White_Car_Charging,
  Consultation,
  EcoFriendly,
  Maintenance,
  Customerservice,
  Monitoring,
} from "../../assets/images";

const services = [
  {
    title: "Installation",
    description:
      "Professional installation services for all types of EV charging stations.",
    image: Car_Charging,
  },
  {
    title: "Maintenance",
    description:
      "Regular maintenance to ensure your charging stations are always operational.",
    image: White_Car_Charging,
  },
  {
    title: "Cloud Services",
    description:
      "Advanced cloud solutions for monitoring and managing your EV charging infrastructure.",
    image: LandingPageImage,
  },
  {
    title: "Consultation",
    description:
      "Expert consultation services to help you choose the right EV charging solution for your needs.",
    image: Car_Charging,
  },
  {
    title: "Repairs",
    description:
      "Prompt and reliable repair services to fix any issues with your EV charging stations.",
    image: Consultation,
  },
  {
    title: "Customization",
    description:
      "Tailored customization services to meet your specific requirements for EV charging infrastructure.",
    image: EcoFriendly,
  },
  {
    title: "Training",
    description:
      "Comprehensive training programs to ensure your staff are fully equipped to manage EV charging stations.",
    image: Maintenance,
  },
  {
    title: "Support",
    description:
      "24/7 support services to address any questions or concerns you may have about your EV charging infrastructure.",
    image: Customerservice,
  },
  {
    title: "Upgrades",
    description:
      "Upgrade services to keep your EV charging stations up-to-date with the latest technology and features.",
    image: Car_Charging,
  },
  {
    title: "Integration",
    description:
      "Seamless integration services to connect your EV charging infrastructure with other systems and platforms.",
    image: Customerservice,
  },
  {
    title: "Monitoring",
    description:
      "Real-time monitoring services to track the performance and usage of your EV charging stations.",
    image: Monitoring,
  },
  // {
  //   title: "Reporting",
  //   description:
  //     "Detailed reporting services to provide insights into the efficiency and effectiveness of your EV charging infrastructure.",
  //   image: ReportingImage,
  // },
  // {
  //   title: "Compliance",
  //   description:
  //     "Compliance services to ensure your EV charging infrastructure meets all regulatory requirements and standards.",
  //   image: ComplianceImage,
  // },
  // {
  //   title: "Security",
  //   description:
  //     "Robust security services to protect your EV charging infrastructure from cyber threats and unauthorized access.",
  //   image: SecurityImage,
  // },
  // {
  //   title: "Scalability",
  //   description:
  //     "Scalability services to help you expand your EV charging infrastructure as your needs grow and evolve.",
  //   image: ScalabilityImage,
  // },
  // {
  //   title: "Efficiency",
  //   description:
  //     "Efficiency services to optimize the performance and energy consumption of your EV charging stations.",
  //   image: EfficiencyImage,
  // },
  // {
  //   title: "Sustainability",
  //   description:
  //     "Sustainability services to promote eco-friendly practices and reduce the environmental impact of your EV charging infrastructure.",
  //   image: SustainabilityImage,
  // },
  // {
  //   title: "Cost Savings",
  //   description:
  //     "Cost-saving services to help you reduce the operational expenses of your EV charging infrastructure.",
  //   image: CostSavingsImage,
  // },
  // {
  //   title: "Innovation",
  //   description:
  //     "Innovative solutions to enhance the functionality and user experience of your EV charging stations.",
  //   image: InnovationImage,
  // },
  // {
  //   title: "Partnerships",
  //   description:
  //     "Strategic partnerships with leading manufacturers and suppliers to deliver the best EV charging solutions.",
  //   image: PartnershipsImage,
  // },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
