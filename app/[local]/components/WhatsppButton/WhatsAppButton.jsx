import Image from "next/image";
import Link from "next/link";
import React from "react";

function WhatsAppButton() {
  return (
    <div className=" fixed bottom-3 right-3 lg:bottom-10 lg:right-10">
      <div className="block lg:hidden hover:scale-110 transition-all duration-200">
        <Link href="contact-us" className="">
          <Image
            src="/assets/Whatsapp logo.jpg"
            width={60}
            height={60}
            alt="Whatsapp logo"
            className=" rounded-3xl"
          />
        </Link>
      </div>
      <div className="hidden lg:block hover:scale-110 transition-all duration-200">
        <Link href="contact-us" className="">
          <Image
            src="/assets/Whatsapp logo.jpg"
            width={100}
            height={100}
            alt="Whatsapp logo"
            className=" rounded-3xl"
          />
        </Link>
      </div>
    </div>
  );
}

export default WhatsAppButton;
