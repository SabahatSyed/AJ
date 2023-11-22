import { STRAPI_API_AUTH_TOKEN, STRAPI_API_ENDPOINT } from '../../ProjectConfig';

const authToken =STRAPI_API_AUTH_TOKEN;
const apiEndpoint =STRAPI_API_ENDPOINT;

export async function getData() {
  try {
    const data = await fetch(apiEndpoint + "newss?sort[0]=createdAt:desc", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-store",
      // next: { revalidate: 0 } ,
    });
    const response = await data.json();
    console.log("data",response.data)
    return response;
  } catch (error) {
    // Handle the error here or rethrow it as needed
    console.error("An error occurred while fetching data:", error);
    throw error; // You can rethrow the error to handle it in the calling code
  }
}
export async function getPartnersData() {
  try {
    const res = await fetch(apiEndpoint + "partners?populate=Image", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-store",
      // next: { revalidate: 0 } ,
    });
    const response = await res.json();
    return response;
  } catch (error) {
    // Handle the error here or rethrow it as needed
    console.error("An error occurred while fetching data:", error);
    throw error; // You can rethrow the error to handle it in the calling code
  }
}

export async function getTeamsData() {
  try {
    const res = await fetch(apiEndpoint + "teams?populate=Image", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-store",
      // next: { revalidate: 0 } ,
    });
    const response = await res.json();
    return response;
  } catch (error) {
    // Handle the error here or rethrow it as needed
    console.error("An error occurred while fetching data:", error);
    throw error; // You can rethrow the error to handle it in the calling code
  }
}

export async function getTicketsData() {
  try {
    const res = await fetch(apiEndpoint + "tickets?populate=Image", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-store",
      // next: { revalidate: 0 } ,
    });
    const response = await res.json();
    return response;
  } catch (error) {
    // Handle the error here or rethrow it as needed
    console.error("An error occurred while fetching data:", error);
    throw error; // You can rethrow the error to handle it in the calling code
  }
}

export function saveEmail(props) {
  // try {
  // Send a POST request to your Strapi backend to subscribe the user
  fetch(apiEndpoint + "news-letters", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(props),
  })
    .then(async (res) => {
      const data = await res.json();
      return "Subscribed successfully!";
    })
    .catch((err) => {
      console.log("Subscription failed. Please try again.");
      return "Subscription failed. Please try again.";
      //   });catch (error) {
      // console.error("Error:", error);
    });
}

export async function getStatsData() {
  try {
    const res = await fetch(apiEndpoint + "stats?populate=icon", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-store",
      // next: { revalidate: 0 } ,
    });
    const response = await res.json();
    return response;
  } catch (error) {
    // Handle the error here or rethrow it as needed
    console.error("An error occurred while fetching data:", error);
    throw error; // You can rethrow the error to handle it in the calling code
  }
}

export async function getLiveStreamUrl() {
  try {
    const data = await fetch(apiEndpoint + 'nyc-event', {
      method: 'GET',
      headers: {
        // Authorization: `Bearer ${authToken}`,
        Authorization: `Bearer ${authToken}`,
      },
      cache: 'no-store',
      // next: { revalidate: 0 } ,
    })
    const response = await data.json()
    return response
  } catch (error) {
    // Handle the error here or rethrow it as needed
    console.error('An error occurred while fetching data:', error)
    throw error // You can rethrow the error to handle it in the calling code
  }
}
// }
// catch(error){
//   console.log("Error:", error);
// }
