import React from 'react';
import { useWindowDimensions, ScrollView } from 'react-native';
import RenderHtml from 'react-native-render-html';

const ContentRender = () => {
  const { width } = useWindowDimensions();

  const source = {
    html: `
      <p>
        AI refers to the simulation of human intelligence in machines that are programmed to think and learn. These systems can analyze data, recognize patterns, and make decisions with minimal human intervention.
      </p>
  
      <h2>Key Applications</h2>
      <ul>
        <li><strong>Healthcare:</strong> AI assists in diagnosing diseases, predicting outcomes, and personalizing treatments.</li>
        <li><strong>Finance:</strong> AI helps detect fraud, automate trading, and optimize investments.</li>
        <li><strong>Retail:</strong> AI enables personalized shopping experiences and intelligent inventory management.</li>
        <li><strong>Transportation:</strong> From autonomous vehicles to traffic prediction, AI is changing mobility.</li>
      </ul>

      <h2>The Future of AI</h2>
      <p>
        As AI continues to evolve, ethical considerations and responsible deployment will become even more important. Transparency, fairness, and accountability must be built into every stage of development.
      </p>
  
      <p>
        The future is intelligent — and AI is leading the way.
      </p>
  
      <div>
        &copy; 2025 AI Trends Blog. All rights reserved.
      </div>
    `
  };

  const tagsStyles : any = {
    p: {
      fontSize: 16,
      paddingHorizontal: 10,
      marginBottom: 10,
      lineHeight: 24,
    },
    h2: {
      color: '#34495e',
      fontSize: 20,
      fontWeight: 'bold',
      paddingHorizontal: 10,
      marginTop: 20,
      marginBottom: 10,
    },
    li: {
      marginBottom: 6,
      fontSize: 16,
      lineHeight: 22,
    },
    div: {
      fontSize: 14,
      color: '#777',
      marginTop: 30,
      paddingHorizontal: 10,
    },
    strong: {
      fontWeight: 'bold',
    }
  };

  return (
    <ScrollView>
      <RenderHtml
        contentWidth={width}
        source={source}
        tagsStyles={tagsStyles}
      />
    </ScrollView>
  );
};

export default ContentRender;
