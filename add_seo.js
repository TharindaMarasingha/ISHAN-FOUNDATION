const fs = require('fs');
const path = require('path');

const metadataMap = {
  'page.tsx': `import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: 'Home',\n  description: 'ISHAN is a global institution committed to advancing humanity and nature through wisdom, wellness, education, ethical leadership, sustainability, and conscious community development.',\n  alternates: {\n    canonical: 'https://ishanfoundation.lk',\n  },\n}\n\n`,
  'about/page.tsx': `import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: 'About',\n  description: 'Learn about ISHAN — our story, vision, mission, philosophy, core beliefs, and commitment to harmonising humanity and nature through wisdom and wellness.',\n  alternates: {\n    canonical: 'https://ishanfoundation.lk/about',\n  },\n}\n\n`,
  'framework/page.tsx': `import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: 'Framework',\n  description: 'The ISHAN Framework — a unified model for human, institutional, and societal transformation through purpose, systems, management, and sustainability.',\n  alternates: {\n    canonical: 'https://ishanfoundation.lk/framework',\n  },\n}\n\n`,
  'leadership/page.tsx': `import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: 'Leadership',\n  description: 'Meet the Circle of Stewards guiding ISHAN — a team of internationally credentialed practitioners, educators, and leaders united in shared purpose.',\n  alternates: {\n    canonical: 'https://ishanfoundation.lk/leadership',\n  },\n}\n\n`,
  'ecosystem/page.tsx': `import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: 'Our Ecosystem',\n  description: 'Explore the ISHAN ecosystem — Arogya Ashram International, Antahakarana Avalokana, Samanvaya, and Sri Vrindavan Project. One vision, multiple initiatives, shared purpose.',\n  alternates: {\n    canonical: 'https://ishanfoundation.lk/ecosystem',\n  },\n}\n\n`,
  'programmes/page.tsx': `import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: 'Programmes',\n  description: 'ISHAN programmes in preventive wellness, proactive wellbeing, conscious leadership, wisdom education, community development, and nature-based learning.',\n  alternates: {\n    canonical: 'https://ishanfoundation.lk/programmes',\n  },\n}\n\n`,
  'research/page.tsx': `import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: 'Research & Publications',\n  description: 'ISHAN research in preventive wellness, yoga, meditation, leadership, education, sustainability, and environmental stewardship. Publications, journals, and digital learning.',\n  alternates: {\n    canonical: 'https://ishanfoundation.lk/research',\n  },\n}\n\n`,
  'partnerships/page.tsx': `import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: 'Partnerships',\n  description: 'Partner with ISHAN — we collaborate with governments, educational institutions, corporations, NGOs, and organisations committed to conscious and sustainable development.',\n  alternates: {\n    canonical: 'https://ishanfoundation.lk/partnerships',\n  },\n}\n\n`,
  'vision/page.tsx': `import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: 'Vision 2026–2056',\n  description: 'ISHAN\\'s 30-year vision for building a legacy — Foundation (2026–2036), Expansion (2036–2046), and Legacy (2046–2056) eras for humanity and nature.',\n  alternates: {\n    canonical: 'https://ishanfoundation.lk/vision',\n  },\n}\n\n`,
  'support/page.tsx': `import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: 'Support Our Mission',\n  description: 'Support ISHAN through volunteering, professional expertise, teaching, research, community projects, environmental initiatives, and philanthropic contributions.',\n  alternates: {\n    canonical: 'https://ishanfoundation.lk/support',\n  },\n}\n\n`,
  'arogya/page.tsx': `import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: 'Arogya Ashram International',\n  description: 'Arogya Ashram International (AAI) — holistic wellness through yoga, meditation, breathwork, Ayurveda, nutrition, and preventive health education in Sri Lanka.',\n  alternates: {\n    canonical: 'https://ishanfoundation.lk/arogya',\n  },\n}\n\n`,
  'avalokana/page.tsx': `import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: 'Antahakarana Avalokana',\n  description: 'Antahakarana Avalokana — ISHAN\\'s signature inner immersion experience for self-discovery, meditation, contemplation, and conscious transformation.',\n  alternates: {\n    canonical: 'https://ishanfoundation.lk/avalokana',\n  },\n}\n\n`,
  'samanvaya/page.tsx': `import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: 'Samanvaya',\n  description: 'Samanvaya — ISHAN\\'s flagship transformational retreat from Pancha Tattva to Sampurna Sattva. A journey to integrated wellbeing through the wisdom of the five elements.',\n  alternates: {\n    canonical: 'https://ishanfoundation.lk/samanvaya',\n  },\n}\n\n`,
  'sri-vrindavan/page.tsx': `import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: 'Sri Vrindavan Project',\n  description: 'Sri Vrindavan — ISHAN\\'s vision for Sri Lanka\\'s first sacred conscious living township. A 150-acre integrated spiritual wellness community in harmony with nature.',\n  alternates: {\n    canonical: 'https://ishanfoundation.lk/sri-vrindavan',\n  },\n}\n\n`,
  'contact/page.tsx': `import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: 'Connect With Us',\n  description: 'Connect with ISHAN — reach out for programmes, partnerships, research, volunteering, retreats, or to join the movement for humanity and nature.',\n  alternates: {\n    canonical: 'https://ishanfoundation.lk/contact',\n  },\n}\n\n`
};

const appDir = path.join(__dirname, 'app');

for (const [relativePath, metadataContent] of Object.entries(metadataMap)) {
  const filePath = path.join(appDir, relativePath);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('export const metadata')) {
      content = content.replace(/export const metadata(?:[\s\S]*?)(?=export default)/, metadataContent);
      fs.writeFileSync(filePath, content);
      console.log('Replaced metadata in ' + relativePath);
    } else {
      if (content.trim().startsWith('"use client"') || content.trim().startsWith("'use client'")) {
        const linesArr = content.split('\\n');
        linesArr.splice(1, 0, '\\n' + metadataContent.trim());
        content = linesArr.join('\\n');
      } else {
        content = metadataContent + content;
      }
      fs.writeFileSync(filePath, content);
      console.log('Added metadata to ' + relativePath);
    }
  } else {
    console.log('File not found: ' + relativePath);
  }
}
