import Anthropic from '@anthropic-ai/sdk';

// Initialize the Anthropic client
const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
});

export const claude = {
  // Function to send a message to Claude
  async sendMessage(message: string) {
    try {
      const response = await anthropic.messages.create({
        model: 'claude-3-opus-20240229',
        max_tokens: 1024,
        messages: [{ role: 'user', content: message }],
      });
      return response.content[0].text;
    } catch (error) {
      console.error('Error sending message to Claude:', error);
      throw error;
    }
  },

  // Function to start a conversation with Claude
  async startConversation() {
    try {
      const response = await anthropic.messages.create({
        model: 'claude-3-opus-20240229',
        max_tokens: 1024,
        messages: [{ role: 'user', content: 'Hello, Claude!' }],
      });
      return response.content[0].text;
    } catch (error) {
      console.error('Error starting conversation with Claude:', error);
      throw error;
    }
  }
}; 