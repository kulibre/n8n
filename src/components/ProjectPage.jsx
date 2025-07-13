import React from 'react';
import styles from '../styles/ProjectPage.module.css';

const ProjectPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img 
          src="/images/projectimage1.png" 
          alt="AI-Powered Anime Art Factory Automation" 
          className={styles.projectImage}
        />
      </div>
      
      <div className={styles.content}>
        <h1 className={styles.title}>AI-Powered Anime Art Factory Automation (n8n + OpenAI)</h1>
        
        <section className={styles.section}>
          <h2>Overview</h2>
          <p>
            This project showcases a fully automated AI art generation and publishing pipeline built using n8n (no-code automation) 
            and OpenAI's GPT-4 API. The system was designed to mass-produce anime-style phone wallpapers and post them directly 
            to TikTok, enabling viral engagement — with one example reaching 122M+ views.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Key Objectives</h2>
          <ul>
            <li>Automate creative prompt generation using AI agents</li>
            <li>Generate and host high-quality AI artwork without manual effort</li>
            <li>Auto-post to TikTok in a content-first format (carousel)</li>
            <li>Log outputs for future use (e.g., productization on Etsy or Patreon)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Workflow Structure</h2>
          
          <h3>🔁 1. Scheduled Execution</h3>
          <p>A Schedule Trigger launches the automation hourly/daily to keep content flow consistent.</p>

          <h3>🎨 2. AI-Generated Prompts</h3>
          <ul>
            <li>Style Agent: Uses OpenAI to decide on the visual art style (e.g., origami, cyberpunk).</li>
            <li>Character Agent: Selects anime characters or traits (e.g., futuristic girl with glowing eyes).</li>
            <li>Final Prompt Agent: Merges the above inputs into a high-resolution image prompt using GPT.</li>
          </ul>
          <p>All agents are powered by OpenAI and parsed using structured JSON output for consistency.</p>

          <h3>🖌️ 3. Image Generation & Hosting</h3>
          <p>The prompt is passed through:</p>
          <ul>
            <li>Generate Node (calls OpenAI image API)</li>
            <li>Convert Node (processes base64 image output)</li>
            <li>Create URL & Upload Nodes (uploads to Blotato/ImageUR for social-ready hosting)</li>
            <li>Combine Node (bundles images for TikTok carousels)</li>
          </ul>

          <h3>📤 4. Publishing to TikTok</h3>
          <p>The final image batch is automatically:</p>
          <ul>
            <li>Sent to Blauto, a 3rd-party TikTok uploader</li>
            <li>Enhanced with auto music + description features</li>
            <li>Ready for mass TikTok posting with zero manual input</li>
          </ul>

          <h3>📊 5. Logging for Repurposing</h3>
          <p>Google Sheets Node logs:</p>
          <ul>
            <li>Prompt used</li>
            <li>Image URL</li>
            <li>TikTok post ID</li>
            <li>Timestamp</li>
          </ul>
          <p>Future use: upscale images, sell as digital posters on Etsy or packages on Patreon</p>
        </section>

        <section className={styles.section}>
          <h2>Tech Stack & Tools</h2>
          <ul>
            <li>n8n: Visual no-code workflow engine</li>
            <li>OpenAI GPT-4.1: AI prompt generation & image synthesis</li>
            <li>ImageUR / Blotato: Image hosting</li>
            <li>Blauto: Automated TikTok posting</li>
            <li>Google Sheets: Content logging and version control</li>
          </ul>
          <p>(Other platforms like Instagram, Pinterest, Facebook, Twitter were prepared but deactivated in this build)</p>
        </section>

        <section className={styles.section}>
          <h2>Outcomes</h2>
          <ul className={styles.outcomes}>
            <li>✅ Viral potential (one prompt-post loop = 122M views)</li>
            <li>✅ 100% hands-off daily content pipeline</li>
            <li>✅ Monetization-ready via social-to-store funnel</li>
            <li>✅ Easily replicable & scalable across niches (e.g., gaming, memes, nature art)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Role & Contributions</h2>
          <p>As the n8n Workflow Creator, I:</p>
          <ul>
            <li>Designed and built the multi-agent system</li>
            <li>Integrated OpenAI's structured tools and chaining</li>
            <li>Implemented robust automation from data input to social posting</li>
            <li>Logged output data for analysis and monetization</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ProjectPage; 