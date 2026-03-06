import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import pfp from "/pfpimage.webp";
import { saveResume } from "../action/action";

export default function Preview() {
  const [resumename, setResumename] = useState("My Resume");
  const printRef = React.useRef(null);
  const dispatch = useDispatch();
  const { PersonalInfo, Education, Experience, Skills, selectedTemplate } =
    useSelector((state) => state);

  const personal = PersonalInfo[PersonalInfo.length - 1] || {};
  const education = Education[Education.length - 1] || {};
  const experiences = (Experience && Experience[Experience.length - 1]) || [];
  const skills = Skills[Skills.length - 1] || [];



  //jsPDF and html2canvas logic to download the resume as PDF
  const handleDownload = async () => {
    const element = printRef.current;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",

      onclone: (clonedDoc) => {
        const clonedElement = clonedDoc.querySelector(".col-span-2");

        if (clonedElement) {
          clonedElement.style.backgroundColor = "#ffffff";
        }

        //  Remove ONLY oklch colors (the real problem)
        const allElements = clonedDoc.querySelectorAll("*");

        allElements.forEach((el) => {
          const style = window.getComputedStyle(el);

          // Fix text color
          if (style.color.includes("oklch")) {
            el.style.color = "#000000";
          }

          // Fix background color
          if (style.backgroundColor.includes("oklch")) {
            el.style.backgroundColor = "#ffffff";
          }

          // Fix border color
          if (style.borderColor.includes("oklch")) {
            el.style.borderColor = "#000000";
          }
        });
      },
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save(`${resumename}.pdf`);
    
    // Save resume to Redux state
    const resumeData = {
      id: Date.now(),
      firstName: personal.firstName,
      lastName: personal.lastName,
      resumeName: resumename,
      createdDate: new Date().toLocaleDateString(),
      template: selectedTemplate
    };
    
    dispatch(saveResume(resumeData));
    alert("Resume downloaded and saved successfully!");
  };

  // Template-specific static data
  const templateData = {
    developer: {
      summary:
        "Passionate Full Stack Developer with 5+ years of experience in building scalable web applications using modern technologies. Expertise in designing and implementing high-performance systems.",
      strengths: [
        "Full Stack Development",
        "System Design & Architecture",
        "Database Optimization",
        "Code Quality & Best Practices",
        "Problem-Solving Skills",
      ],
      certifications: [
        "AWS Certified Solutions Architect (2023)",
        "Docker Certified Associate (2022)",
        "React Advanced Development Certification (2023)",
        "MongoDB Developer Certification (2021)",
      ],
      activities: [
        "Open Source Contributor – Active contributor to React and Node.js projects on GitHub",
        "Tech Blogger – Published 30+ technical articles on web development",
        "Hackathon Winner – Won 3 hackathons with innovative solutions",
        "Mentoring Junior Developers – Coached 10+ junior developers on full-stack development",
        "Community Speaker – Presented at 5+ tech conferences on modern web technologies",
      ],
    },
    hr: {
      summary:
        "Strategic HR Professional with 8+ years of experience in talent acquisition, employee relations, and organizational development. Proven track record in building high-performing teams and implementing HR strategies.",
      strengths: [
        "Talent Acquisition & Recruitment",
        "Employee Relations Management",
        "Organizational Development",
        "Leadership & Team Building",
        "HR Policy & Compliance",
      ],
      certifications: [
        "SHRM Certified Professional (SHRM-CP)",
        "SAP SuccessFactors HR Management Certification (2022)",
        "Advanced Recruitment Strategies Certification (2021)",
        "Organizational Leadership Certification (2020)",
      ],
      activities: [
        "HR Conference Speaker – Presented on 'Future of Work' at national HR summit",
        "Recruiting Committee Chair – Led university recruiting partnerships",
        "Employee Wellness Program Lead – Developed comprehensive wellness initiatives",
        "Mentoring HR Professionals – Guided 8+ aspiring HR practitioners",
        "Diversity & Inclusion Advocate – Spearheaded D&I initiatives across organization",
      ],
    },
    sales: {
      summary:
        "Results-driven Sales Professional with 7+ years of proven track record in closing enterprise deals, building strategic client relationships, and consistently exceeding sales targets. Expert in solution selling and customer success management.",
      strengths: [
        "Enterprise Sales & Deal Closure",
        "Client Relationship Management",
        "Negotiation & Persuasion",
        "Pipeline Management",
        "Territory Expansion",
      ],
      certifications: [
        "Salesforce Certified Administrator (2023)",
        "Advanced Sales Negotiation Certification (2022)",
        "Strategic Account Management Certification (2021)",
        "HubSpot Sales Enablement Certification (2022)",
      ],
      activities: [
        "Sales Excellence Award Winner – Top performer for 3 consecutive years",
        "Mentor for Sales Team – Trained 15+ sales representatives",
        "Industry Forum Speaker – Presented sales strategies at B2B conferences",
        "Client Success Stories – Published 10+ client case studies",
        "Networking Leader – Built network of 500+ corporate contacts",
      ],
    },
    manager: {
      summary:
        "Strategic Product Manager with 6+ years of experience in product development, market research, and cross-functional team leadership. Proven ability to define product vision and deliver market-leading solutions.",
      strengths: [
        "Product Strategy & Roadmap",
        "Market Research & Analysis",
        "Stakeholder Management",
        "Agile & Scrum Leadership",
        "User Experience Design",
      ],
      certifications: [
        "Pragmatic Marketing Certified (2023)",
        "Agile Certified Practitioner (ACP) (2022)",
        "Product Management Nanodegree – Udacity (2021)",
        "Lean Product Development Certification (2020)",
      ],
      activities: [
        "Product Conference Speaker – Presented product strategy at 3 major conferences",
        "Startup Advisor – Advisory board member for 2 early-stage startups",
        "Product Management Coach – Mentored 6+ product managers",
        "User Experience Researcher – Led 50+ customer interviews & research",
        "Innovation Lab Lead – Founded internal innovation lab for experimentation",
      ],
    },
  };

  const currentTemplate =
    templateData[selectedTemplate] || templateData.developer;

  return (
    <div className="min-h-screen bg-gray-200 py-4 md:py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-24">
        {/* Resume Preview */}
        <div
          ref={printRef}
          className="lg:col-span-2 bg-white shadow rounded-lg p-4 md:p-6"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Resume Preview</h2>
          <div className="border p-4 md:p-6 rounded-lg">
            <img src={pfp} alt="" className="w-16 md:w-24 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2">
              {personal.firstName} {personal.lastName}
            </h3>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-600 mb-4">
              <span>📧 {personal.email || "your.email@gmail.com"}</span>
              <span>📱 {personal.mobile || "+91-XXXXXXXXXX"}</span>
              <span className="break-all">
                🔗{" "}
                <a
                  href={
                    personal.linkedin ||
                    "https://www.linkedin.com/in/yourprofile"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn
                </a>
              </span>
            </div>

            {/* Professional Summary */}
            <section className="mb-4 border-t border-gray-500 pt-4">
              <h4 className="font-semibold text-indigo-600 text-base md:text-lg">
                Professional Summary
              </h4>
              <p className="text-gray-700 text-sm mb-3">
                {personal.objective || currentTemplate.summary}
              </p>
              <h5 className="font-semibold text-indigo-500 text-sm">
                Core Strengths:
              </h5>
              <ul className="text-gray-700 text-sm list-disc list-inside">
                {currentTemplate.strengths.map((strength, idx) => (
                  <li key={idx}>{strength}</li>
                ))}
              </ul>
            </section>

            {/* Experience */}
            <section className="mb-4 border-t border-gray-500 pt-4">
              <h4 className="font-semibold text-indigo-600 text-base md:text-lg">
                Professional Experience
              </h4>
              {experiences && experiences.length > 0 ? (
                <div className="space-y-3">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="text-gray-700 text-sm">
                      <p>
                        <strong>{exp.jobTitle}</strong> at{" "}
                        <strong>{exp.organization}</strong>
                      </p>
                      <p className="text-gray-600 text-xs">
                        {exp.startYear} – {exp.endYear}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-700 text-sm italic">
                  No experience data provided
                </p>
              )}
            </section>

            {/* Education */}
            <section className="mb-4 border-t border-gray-500 pt-4">
              <h4 className="font-semibold text-indigo-600 text-base md:text-lg">Education</h4>
              {education && Object.keys(education).length > 0 ? (
                <div className="text-gray-700 text-sm space-y-2">
                  <p>
                    <strong>{education.degree}</strong> in {education.field}
                  </p>
                  <p>
                    <strong>Institution:</strong> {education.institution}
                  </p>
                  <p>
                    <strong>Duration:</strong> {education.startYear} –{" "}
                    {education.endYear}
                  </p>
                </div>
              ) : (
                <p className="text-gray-700 text-sm italic">
                  No education data provided
                </p>
              )}

              {/* Professional Certifications */}
              <h5 className="font-semibold text-indigo-500 text-sm mt-3 mb-2">
                Certifications & Professional Development
              </h5>
              <ul className="text-gray-700 text-sm space-y-1">
                {currentTemplate.certifications.map((cert, idx) => (
                  <li key={idx}>• {cert}</li>
                ))}
              </ul>
            </section>

            {/* Skills */}
            <section className="mb-4 border-t border-gray-500 pt-4">
              <h4 className="font-semibold text-indigo-600 text-base md:text-lg">Key Skills</h4>
              <p className="text-gray-700 text-sm">
                {skills && skills.length > 0
                  ? skills.join(", ")
                  : "No skills added yet"}
              </p>
            </section>

            {/* Extra Curricular Activities */}
            <section className="mb-4 border-t border-gray-500 pt-4">
              <h4 className="font-semibold text-indigo-600 text-base md:text-lg">
                Extra Curricular Activities & Recognition
              </h4>
              <ul className="text-gray-700 text-sm space-y-2">
                {currentTemplate.activities.map((activity, idx) => (
                  <li key={idx}>• {activity}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* File Name Form */}
        <div className="bg-white shadow rounded-lg p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Create File Name</h2>
          <input
            type="text"
            defaultValue="My Resume"
            className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
            onChange={(e) => setResumename(e.target.value)}
          />
          <div className="flex flex-col sm:flex-row gap-2 sm:justify-between">
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm md:text-base order-2 sm:order-1">
              Back
            </button>
            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm md:text-base order-1 sm:order-2"
              onClick={handleDownload}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
