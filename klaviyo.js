
import axios from 'axios';

class KlaviyoService {
  constructor() {
    this.baseURL = 'https://a.klaviyo.com/api/v2';
    this.apiKey = import.meta.env.VITE_KLAVIYO_API_KEY;
  }

  async getLists() {
    try {
      const response = await axios.get(`${this.baseURL}/lists`, {
        params: {
          api_key: this.apiKey
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching Klaviyo lists:', error);
      throw error;
    }
  }

  async getListMembers(listId) {
    try {
      const response = await axios.get(`${this.baseURL}/list/${listId}/members`, {
        params: {
          api_key: this.apiKey
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching list members:', error);
      throw error;
    }
  }

  async getMetrics() {
    try {
      const response = await axios.get(`${this.baseURL}/metrics`, {
        params: {
          api_key: this.apiKey
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching metrics:', error);
      throw error;
    }
  }

  async sendCampaign(data) {
    try {
      const response = await axios.post(`${this.baseURL}/campaigns`, {
        api_key: this.apiKey,
        ...data
      });
      return response.data;
    } catch (error) {
      console.error('Error sending campaign:', error);
      throw error;
    }
  }
}

export const klaviyoService = new KlaviyoService();
