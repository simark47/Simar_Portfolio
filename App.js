import React from "react";
import ReactDOM from "react-dom/client";
("use strict");
console.log("simar");
const Search_bar = () => (
  <div id="search">
    <input type="search" />

    <button type="button" className="btn btn-primary">
      <i className="fas fa-search">search </i>
    </button>
  </div>
);
const Restaurant = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "517830",
      name: "Third Wave Coffee",
      uuid: "e557b514-6ab6-4077-adba-0a24927f2a6e",
      city: "2",
      area: "Sohna Road",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "0dca660dbdf2e04f9b861c4426ffd41e",
      cuisines: ["Beverages"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 2.299999952316284,
      slugs: {
        restaurant: "third-wave-coffee-sohna-road-sohna-road",
        city: "gurgaon",
      },
      cityState: "2",
      address:
        "Third wave coffee     Unit no.8 , GF Block -c , Vatika Business park , Sona Road , Gurugram,122108",
      locality: "Vatika Business Park",
      parentId: 274773,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3400,
        message: "",
        title: "Delivery Charge",
        amount: "3400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6957999~p=7~eid=00000188-9e93-49b9-0a06-1ca000a30717",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "517830",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 2.299999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.4",
      totalRatings: 500,
      new: false,
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "325158",
      name: "Moolchand Paratha",
      uuid: "0b98ceeb-9c95-4c08-b912-64a28ebbc444",
      city: "2",
      area: "Sector 14",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "cdtv7tga96apxurtirdz",
      cuisines: ["North Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 41,
      minDeliveryTime: 41,
      maxDeliveryTime: 41,
      slaString: "41 MINS",
      lastMileTravel: 8.100000381469727,
      slugs: {
        restaurant: "moolchand-paratha-cyber-city-cyber-city",
        city: "gurgaon",
      },
      cityState: "2",
      address: "Sector 14 huda market shop no 15",
      locality: "Cyber City",
      parentId: 4515,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 7400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 7400,
        message: "",
        title: "Delivery Charge",
        amount: "7400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "8.1 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "325158",
        deliveryTime: 41,
        minDeliveryTime: 41,
        maxDeliveryTime: 41,
        lastMileTravel: 8.100000381469727,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 5000,
      new: false,
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "75235",
      name: "Petuu Ram",
      uuid: "22e88d67-c88a-4692-9650-dd60a8de75f4",
      city: "2",
      area: "Ardee City",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "myuf1zdyh4zhaectmyqc",
      cuisines: ["Indian", "North Indian", "Punjabi"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      slaString: "37 MINS",
      lastMileTravel: 6.099999904632568,
      slugs: {
        restaurant: "petuu-ram-sector-52-jalvayu-towers",
        city: "gurgaon",
      },
      cityState: "2",
      address:
        "SHOP NO-5 & 6, 27, GATE NUMBER-2, ARDEE CITY ROAD, BLOCK-B, SECTOR-52, GURGAON",
      locality: "Sector 52",
      parentId: 16600,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5800,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5800,
        message: "",
        title: "Delivery Charge",
        amount: "5800",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "75235",
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        lastMileTravel: 6.099999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 10000,
      new: false,
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "398957",
      name: "Swiss Cake and Bakery",
      uuid: "d1363d67-1958-46af-9f26-23acf0a56c64",
      city: "2",
      area: "DLF Phase 4",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "yeyeamxuvy6xeduziooo",
      cuisines: ["Bakery", "Desserts"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 47,
      minDeliveryTime: 47,
      maxDeliveryTime: 47,
      slaString: "47 MINS",
      lastMileTravel: 9.100000381469727,
      slugs: {
        restaurant: "swiss-cake-and-bakery-dlf-phase-4-dlf-phase-4",
        city: "gurgaon",
      },
      cityState: "2",
      address: "451, Sector 27, Gurugram, Haryana 122009, India",
      locality: "Sector 27",
      parentId: 256644,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 8400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 8400,
        message: "",
        title: "Delivery Charge",
        amount: "8400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=7062436~p=4~eid=00000188-9e93-49b9-0a06-1c9f00a3046b",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "9.1 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "398957",
        deliveryTime: 47,
        minDeliveryTime: 47,
        maxDeliveryTime: 47,
        lastMileTravel: 9.100000381469727,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "676065",
      name: "Civil Lines Wala",
      uuid: "19483f6e-d034-4bb7-8911-8ad5bfbb9616",
      city: "2",
      area: "Old Judicial Complex",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "3fdf3d7e951ea446d5ffa2e098f39d10",
      cuisines: ["North Indian", "Fast Food"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant: "civil-lines-wala-sector-14-sector-14",
        city: "gurgaon",
      },
      cityState: "2",
      address:
        "K-125,Old Judicial Complex,Gurgaon ,Gurgaon,Gurugram,Haryana-122001",
      locality: "Judiciary Complex",
      parentId: 63552,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5200,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5200,
        message: "",
        title: "Delivery Charge",
        amount: "5200",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "676065",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 100,
      new: false,
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "408195",
      name: "Nagpal Chole Bhature (Civil Lines)",
      uuid: "f1b4f7c3-5e3c-4a09-a01b-a08933e66238",
      city: "2",
      area: "Sector 14",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "7312aae565795cf5b2bae47472e59f2f",
      cuisines: ["North Indian"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 38,
      maxDeliveryTime: 38,
      slaString: "38 MINS",
      lastMileTravel: 5.599999904632568,
      slugs: {
        restaurant: "nagpal's-special-chole-bhature-sector-14-sector-14",
        city: "gurgaon",
      },
      cityState: "2",
      address:
        "Shop No.140, Old Judicial Complex, Civil Lines Road, Gurugram-122001",
      locality: "Civil Lines Road",
      parentId: 251360,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5200,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5200,
        message: "",
        title: "Delivery Charge",
        amount: "5200",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "408195",
        deliveryTime: 38,
        minDeliveryTime: 38,
        maxDeliveryTime: 38,
        lastMileTravel: 5.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
  },
];
// const restaurant_list = [
//   {
//     name: "Burger king",
//     image:
//       "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//     detail: ["burger", "american"],
//     ratings: "4.2",
//   },
//   {
//     name: "KFC",
//     image:
//       "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//     detail: ["chicken", "american"],
//     ratings: "4.65",
//   },
// ];
const Card = (props) => {
  return (
    <div id="card">
      <img
        // src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${Restaurant_list.data.data.cloudinaryImageId}`}
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          props.restaurant.data.cloudinaryImageId
        }
      />
      <h2>{props.restaurant.data.name}</h2>
      <h3>{props.restaurant.data.cuisines}</h3>
      <h4>{props.restaurant.data.avgRating}</h4>
    </div>
  );
};

console.log(Restaurant[0]);
const Body = () => {
  return (
    <div id="restaurant-list">
      <Card restaurant={Restaurant[0]} />
      <Card restaurant={Restaurant[1]} />
      <Card restaurant={Restaurant[2]} />
      <Card restaurant={Restaurant[3]} />
      <Card restaurant={Restaurant[4]} />
      {/* <Card /> <Card />
      <Card />
      <Card /> <Card />
      <Card />
      <Card /> */}
    </div>
  );
};

const Icon = () => <div id="icon">U</div>;
const Header = () => (
  <div className="header">
    <h1 id="logo"> logo</h1>
    <Search_bar />
    <Icon />
  </div>
);

const AppLayout = () => (
  <>
    <Header></Header>
    <Body />
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);
