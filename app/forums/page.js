import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const topics = [
  {
    text: "Python",
    img: "/img/python.png",
    desc: "Let's discuss everything about Python",
    slug: "Python-chat",
  },
  {
    text: "JavaScript",
    img: "/img/javascript.png",
    desc: "Explore the world of JavaScript, from basics to advanced topics",
    slug: "js-chat",
  },
  {
    text: "Machine Learning",
    img: "/img/machine-learning.png",
    desc: "Dive into ML concepts, algorithms, and applications",
    slug: "ml-chat",
  },
  {
    text: "Web Development",
    img: "/img/web-development.png",
    desc: "Learn about building modern, responsive web applications",
    slug: "Web_development-chat",
  },
  {
    text: "Data Science",
    img: "/img/data-science.png",
    desc: "Discuss data analysis, visualization, and data-driven decision making",
    slug: "ds-chat",
  },
  {
    text: "DevOps",
    img: "/img/devops.png",
    desc: "Talk about CI/CD pipelines, Kubernetes, Docker, and cloud deployments",
    slug: "devops-chat",
  },
];

const Forums = () => {
  return (
    <div className="bg-black text-white min-h-screen py-20">
      <div className="container mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-center mb-16">
          Discussion Forums
        </h1>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <div
              key={topic.slug}
              className="bg-gray-800 rounded-lg shadow-xl p-8 hover:scale-105 transition-transform"
            >
              {/* Topic Image */}
              <div className="flex justify-center mb-6">
                <Image
                  src={topic.img}
                  alt={topic.text}
                  width={70}
                  height={70}
                  className="rounded-full"
                />
              </div>

              {/* Topic Title */}
              <h2 className="text-3xl font-bold text-center mb-4">{topic.text}</h2>

              {/* Topic Description */}
              <p className="text-gray-400 text-center mb-6">{topic.desc}</p>

              {/* Discuss Button */}
              <div className="text-center">
                <Link href={`/forum/${topic.slug}`}>
                  <Button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-6 rounded-lg font-semibold transition-colors">
                    Discuss Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forums;
