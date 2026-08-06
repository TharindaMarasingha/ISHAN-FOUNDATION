const fs = require('fs');
const path = require('path');

const pages = ['about', 'framework', 'ecosystem', 'leadership', 'partnerships', 'programmes', 'research', 'support', 'vision'];
const baseDir = path.join('d:', 'IFP', 'ISHAN-FOUNDATION');

pages.forEach(page => {
  // Check app/page/page.tsx
  const pageFile = path.join(baseDir, 'app', page, 'page.tsx');
  if (fs.existsSync(pageFile)) {
    let content = fs.readFileSync(pageFile, 'utf8');
    // For about page sticky container
    if (page === 'about') {
      content = content.replace(
        /<div className="sticky top-0 z-0 w-full min-h-screen flex flex-col justify-center bg-surface">/,
        '<div className="sticky top-0 z-0 w-full min-h-screen flex flex-col justify-center bg-white">'
      );
      fs.writeFileSync(pageFile, content, 'utf8');
    }
  }

  // Check sections file
  let sectionsFile = '';
  if (page === 'about') sectionsFile = path.join(baseDir, 'components', page, 'AboutSections.tsx');
  else if (page === 'framework') sectionsFile = path.join(baseDir, 'components', page, 'FrameworkSections.tsx');
  else if (page === 'ecosystem') sectionsFile = path.join(baseDir, 'components', page, 'EcosystemSections.tsx');
  else if (page === 'leadership') sectionsFile = path.join(baseDir, 'components', page, 'LeadershipSections.tsx');
  else if (page === 'partnerships') sectionsFile = path.join(baseDir, 'components', page, 'PartnershipsSections.tsx');
  else if (page === 'programmes') sectionsFile = path.join(baseDir, 'components', page, 'ProgrammesSections.tsx');
  else if (page === 'research') sectionsFile = path.join(baseDir, 'components', page, 'ResearchSections.tsx');
  else if (page === 'support') sectionsFile = path.join(baseDir, 'components', page, 'SupportSections.tsx');
  else if (page === 'vision') sectionsFile = path.join(baseDir, 'components', page, 'VisionSections.tsx');

  if (fs.existsSync(sectionsFile)) {
    let content = fs.readFileSync(sectionsFile, 'utf8');
    
    // We only want to modify the FIRST section in the file, which corresponds to the one immediately following the hero.
    // Let's find the first `<section` or `<div` that acts as the container.
    // Or just look for `bg-surface` in the first section.
    
    // Split by function exports
    const functionParts = content.split('export function');
    if (functionParts.length > 1) {
      let firstSection = functionParts[1];
      
      // Replace bg-surface with bg-white
      firstSection = firstSection.replace(/className="([^"]*)bg-surface([^"]*)"/, 'className="$1bg-white$2"');
      
      // Replace border-y with border-b
      firstSection = firstSection.replace(/className="([^"]*)border-y([^"]*)"/, 'className="$1border-b$2"');
      
      // Replace border-t with nothing (unless it's a special border like border-t-primary on a card, but we only want to replace it on the outer section)
      // Actually, just replace border-t border-divider on the outer section.
      const sectionMatch = firstSection.match(/<section[^>]*className="([^"]*)"/);
      if (sectionMatch) {
         let newClass = sectionMatch[1];
         newClass = newClass.replace(/\bbg-surface\b/, 'bg-white');
         newClass = newClass.replace(/\bborder-y\b/, 'border-b');
         newClass = newClass.replace(/\bborder-t\b/, '');
         newClass = newClass.replace(/\s+/g, ' ').trim();
         
         // Add bg-white if it doesn't have it and doesn't have bg-surface
         if (!newClass.includes('bg-white') && !newClass.includes('bg-[#FFFFFF]')) {
           newClass += ' bg-white';
         }
         
         firstSection = firstSection.replace(sectionMatch[1], newClass);
      }
      
      functionParts[1] = firstSection;
      content = functionParts.join('export function');
      fs.writeFileSync(sectionsFile, content, 'utf8');
    }
  }
});

console.log("Done");
