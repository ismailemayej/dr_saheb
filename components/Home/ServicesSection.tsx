"use client";

import React, { useState } from "react";
import Heading from "../Heading";
import { services } from "@/config/site";

import Modal from "../Modal";
import Link from "next/link";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<null | {
    name: string;
    details: string;
  }>(null);

  const closeModal = () => setSelectedService(null);

  return (
    <div>
      <Heading level={3} className="" center>
        আমাদের সেবা সমূহ
      </Heading>

      <div className="px-4 bangla grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 shadow-2xl">
        {services.map((service) => (
          <div className="shadow-md rounded-xl p-4 hover:scale-105 transition-transform duration-300">
            <Link href="/book-appoinment">
              <div key={service.id} className=" p-4 flex flex-col items-center">
                <div className="bg-white p-4 flex flex-col items-center">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-12 h-12  rounded-full object-cover"
                  />
                  <h5 className="text-xl font-semibold">{service.name}</h5>
                </div>
              </div>
            </Link>
            <div>
              <div className="text-sm text-gray-600 line-clamp-1">
                {service.details}
              </div>
              <button
                onClick={() =>
                  setSelectedService({
                    name: service.name,
                    details: service.details,
                  })
                }
                className="mt-2 text-blue-600 font-bold text-sm"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedService}
        onClose={closeModal}
        title={selectedService?.name || ""}
        details={selectedService?.details || ""}
      />
    </div>
  );
};

export default ServicesSection;
