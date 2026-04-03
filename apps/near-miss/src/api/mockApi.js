const API_BASE_URL = "http://localhost:8000";
const COPILOT_API_BASE_URL = "https://api.staging.ravenapp.dev";
const ACCOUNT_ID = "89599c21-1c96-4764-b6b4-939eb71701eb";

export async function getAIAnalysis(reportId, userQuery = null) {
  try {
    const url = `${API_BASE_URL}/report/${reportId}/chat${
      userQuery ? `?user_query=${encodeURIComponent(userQuery)}` : ""
    }`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting AI analysis:", error);
    throw error;
  }
}

export async function getChatHistory(reportId) {
  try {
    const response = await fetch(`${API_BASE_URL}/report/${reportId}/chat-history`);
    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.history || [];
  } catch (error) {
    console.error("Error getting chat history:", error);
    throw error;
  }
}

export function getDashboardData() {
  // Simulate an API call with dummy data after a short delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalReports: 120, // Example value for YTD near-miss reports
        monthlyTrend: [10, 15, 20, 18, 22, 25, 30, 28, 20, 15, 10, 5],
        topCategories: ["Ammonia Leak", "Equipment Failure", "Human Error"],
        highRiskAreas: ["Refrigeration Section", "Reforming Section", "CO2 Removal Section"],
      });
    }, 1000);
  });
}

export function getAnswerFromQuery(query) {
  // Update to use chat completion endpoint
  return new Promise(async (resolve, reject) => {
    try {
      const url = new URL(`${API_BASE_URL}/chat`);
      const headers = {
        "Content-Type": "application/json",
      };

      const body = {
        messages: [
          {
            role: "user",
            content: query,
          },
        ],
      };

      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`API call failed: ${response.statusText}`);
      }

      const data = await response.json();
      resolve(data.content);
    } catch (error) {
      console.error("Error getting answer:", error);
      reject(error);
    }
  });
}

export async function createFormAssistant() {
  try {
    const response = await fetch(`${COPILOT_API_BASE_URL}/copilot/v1/form_assistant`, {
      method: "POST",
      headers: {
        "X-Account-Id": ACCOUNT_ID,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: "near_miss",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("API Error:", {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      });
      throw new Error(`API call failed: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Create form response:", data);

    if (!data || !data.id) {
      console.error("Invalid API response structure:", data);
      throw new Error("Invalid API response structure");
    }

    return data;
  } catch (error) {
    console.error("Error creating form assistant:", error);
    throw error;
  }
}

export async function getFormState(formId) {
  try {
    const response = await fetch(`${COPILOT_API_BASE_URL}/copilot/v1/form_assistant/${formId}`, {
      method: "GET",
      headers: {
        "X-Account-Id": ACCOUNT_ID,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("API Error:", {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      });
      throw new Error(`API call failed: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("API response data:", data);

    if (!data || !data.state) {
      console.error("Invalid API response structure:", data);
      throw new Error("Invalid API response structure");
    }

    return data;
  } catch (error) {
    console.error("Error initializing form assistant:", error);
    return {
      state: {
        report_metadata: {
          report_id: "",
          date: "",
          time: "",
        },
        location_info: {
          plant_department: "",
          exact_location: "",
          equipment: {
            tag_no: "",
            description: "",
          },
        },
        incident_details: {
          short_description: "",
          immediate_action: "",
        },
        reporter_info: {
          name: "",
          id_no: "",
          department: "",
          report_date: "",
          report_time: "",
        },
        safety_validation: {
          classification: {
            workplace_safety_near_miss: false,
            process_safety_near_miss: false,
            unsafe_condition: false,
            unsafe_act: false,
            other: false,
          },
          status: "",
          validator_name: "",
          validation_date: "",
        },
      },
    };
  }
}

export async function submitFormResponse(formId, query, questionId) {
  try {
    const response = await fetch(
      `${COPILOT_API_BASE_URL}/copilot/v1/form_assistant/${formId}/query_response`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Account-Id": ACCOUNT_ID,
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: query,
          question_id: questionId,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("API Error:", {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      });
      throw new Error(`API call failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting form response:", error);
    throw error;
  }
}

export async function getConversationMessages(conversationId) {
  try {
    const response = await fetch(
      `${COPILOT_API_BASE_URL}/copilot/v1/conversations/${conversationId}/messages`,
      {
        method: "GET",
        headers: {
          "X-Account-Id": ACCOUNT_ID,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("API Error:", {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      });
      throw new Error(`API call failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.messages || [];
  } catch (error) {
    console.error("Error fetching conversation messages:", error);
    throw error;
  }
}

export async function updateFormState(formId, formState) {
  try {
    const payload = {
      state: {
        near_miss_report: formState,
        near_miss_investigation: {},
      },
    };

    const response = await fetch(`${COPILOT_API_BASE_URL}/copilot/v1/form_assistant/${formId}`, {
      method: "PUT",
      headers: {
        "X-Account-Id": ACCOUNT_ID,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("API Error:", {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      });
      throw new Error(`API call failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating form state:", error);
    throw error;
  }
}

export async function getLatestIncidents() {
  try {
    const response = await fetch(`${COPILOT_API_BASE_URL}/copilot/v1/forms`, {
      method: "GET",
      headers: {
        "X-Account-Id": ACCOUNT_ID,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }

    const data = await response.json();
    // Return the forms array from the response
    return data.forms || [];
  } catch (error) {
    console.error("Error fetching latest incidents:", error);
    throw error;
  }
}

export const executeAgent = async (payload) => {
  try {
    const response = await fetch(`${COPILOT_API_BASE_URL}/copilot/v1/agent/execute`, {
      method: "POST",
      headers: {
        "X-Account-Id": ACCOUNT_ID,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("API Error:", {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      });
      throw new Error("Failed to execute agent");
    }

    return await response.json();
  } catch (error) {
    console.error("Error executing agent:", error);
    throw error;
  }
};

export async function getAnswerFromGemini(query) {
  try {
    const url = new URL(`${API_BASE_URL}/gemini/analyze`);
    const headers = {
      "Content-Type": "application/json",
    };

    const body = {
      query: query,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error getting Gemini analysis:", error);
    throw error;
  }
}

export const getAgentStatus = async (agentId) => {
  try {
    const response = await fetch(`${COPILOT_API_BASE_URL}/copilot/v1/agent/${agentId}`, {
      method: "GET",
      headers: {
        "X-Account-Id": ACCOUNT_ID,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("API Error:", {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      });
      throw new Error("Failed to get agent status");
    }

    return await response.json();
  } catch (error) {
    console.error("Error getting agent status:", error);
    throw error;
  }
};
