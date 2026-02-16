import React from "react";

import leetcodeLogo from "../assets/leetcode.png";
import hackerrankLogo from "../assets/hackerrank.png";
import codechefLogo from "../assets/codechef.png";
import codeforcesLogo from "../assets/codeforces.png";
import codingninjaLogo from "../assets/codingninja.png";
import gfgLogo from "../assets/gfg.png";

const profiles = [
  { name: "LeetCode", logo: leetcodeLogo, link: "https://leetcode.com/u/Shubhangi_Wakchaure/" },
  { name: "HackerRank", logo: hackerrankLogo, link: "https://www.hackerrank.com/profile/shubhangiwakcha2" },
  { name: "CodeChef", logo: codechefLogo, link: "https://www.codechef.com/users/open_vine_66" },
  { name: "CodeForces", logo: codeforcesLogo, link: "https://codeforces.com/profile/ShubhangiWakchaure" },
  { name: "CodingNinja", logo: codingninjaLogo, link: "https://www.naukri.com/code360/profile/shubhangiw" },
  { name: "GeeksforGeeks", logo: gfgLogo, link: "https://www.geeksforgeeks.org/profile/shubhangiwqv48" },
];

const Coding = () => {
  return (
    <section className="w-full my-16 sm:my-24 px-3 sm:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto rounded-3xl bg-linear-to-br from-black via-[#0b1020] to-black p-6 sm:p-6 md:p-10 shadow-2xl border border-white/10">

        <div className="mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            My Coding Profiles
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl text-sm sm:text-base">
            A quick look at where I practice DSA, solve problems, and ship code.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 place-items-center">
          {profiles.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="group relative w-full flex justify-center"
            >
              {/* HALO (reduced on mobile) */}
              <div
                className="absolute -inset-2 sm:-inset-4 rounded-3xl blur-xl sm:blur-2xl opacity-30 sm:opacity-40 group-hover:opacity-60 transition"
              />

              {/* CARD */}
              <div
                className="relative pt-8 sm:pt-10 pb-4 sm:pb-6 px-3 sm:px-4 md:px-5 rounded-2xl sm:rounded-3xl 
                bg-white/10 backdrop-blur-xl border border-white/20 text-center shadow-xl
                group-hover:-translate-y-2 group-hover:shadow-cyan-500/20 transition
                w-full max-w-37.5 sm:max-w-42.5 md:max-w-47.5"
              >
                {/* ICON CIRCLE */}
                <div className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 
                  w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-7 h-7 sm:w-9 sm:h-9 object-contain"
                  />
                </div>

                {/* NAME TAG (overlapping circle edge) */}
                <span className="inline-block mt-1 sm:mt-2 px-3 sm:px-5 py-1 rounded-full 
                  text-xs sm:text-sm font-semibold bg-black/80 text-white border border-white/20">
                  {item.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coding;