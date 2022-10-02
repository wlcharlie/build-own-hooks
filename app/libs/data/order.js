// import { faker } from "@faker-js/faker"
// import { format, formatRFC3339 } from "date-fns"

// const data = Array.from({ length: 12 }, (_, i) => {
//   const date = formatRFC3339(new Date(faker.date.past()))

//   return {
//     id: faker.datatype.uuid(),
//     no: `OR${format(new Date(date), "yyyyMMdd")}`,
//     date,
//     customer: {
//       name: faker.name.firstName(),
//       phone: faker.phone.number(),
//     },
//     products: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => {
//       const qty = faker.datatype.number({ min: 1, max: 50 })
//       const price = faker.commerce.price(100, 200, 0)
//       return {
//         id: faker.datatype.uuid(),
//         no: `PR${faker.datatype.number({ min: 1000, max: 9999 })}`,
//         name: faker.commerce.product(),
//         price: faker.commerce.price(100, 200, 0),
//         qty: faker.datatype.number({ min: 1, max: 50 }),
//         subTotal: qty * +price,
//       }
//     }),
//     createAt: date,
//   }
// })

// const item = data.map((e) => ({
//   ...e,
//   total: e.products.reduce((acc, cur) => acc + cur.subTotal, 0),
// }))

// item.sort((a, b) => +new Date(a.createAt) - +new Date(b.createAt))

// export default item

const data = [
  {
    id: "bcfd5e98-ddc0-4de7-8058-33e83debfcbf",
    no: "OR20211004",
    date: "2021-10-04T19:22:28+08:00",
    customer: {
      name: "Pearl",
      phone: "(490) 573-0387 x86146",
    },
    products: [
      {
        id: "d3bb75b5-1b1e-43f7-91bf-7e97b3b2a8ac",
        no: "PR6526",
        name: "Computer",
        price: "127",
        qty: 20,
        subTotal: 3597,
      },
    ],
    createAt: "2021-10-04T19:22:28+08:00",
    total: 3597,
  },
  {
    id: "c20ba992-ce78-466a-a300-33267443ccaf",
    no: "OR20211114",
    date: "2021-11-14T11:31:04+08:00",
    customer: {
      name: "Enrico",
      phone: "685-987-2842 x522",
    },
    products: [
      {
        id: "4451eb07-633a-4318-84af-4621c0089506",
        no: "PR8878",
        name: "Ball",
        price: "126",
        qty: 26,
        subTotal: 6336,
      },
    ],
    createAt: "2021-11-14T11:31:04+08:00",
    total: 6336,
  },
  {
    id: "f9fe302e-8a81-4429-a6f1-875d0d23c960",
    no: "OR20211204",
    date: "2021-12-04T00:24:06+08:00",
    customer: {
      name: "Drew",
      phone: "319.406.3706 x37993",
    },
    products: [
      {
        id: "10895568-cfe3-44e2-b781-aff1ae8006bc",
        no: "PR3435",
        name: "Hat",
        price: "121",
        qty: 13,
        subTotal: 5148,
      },
    ],
    createAt: "2021-12-04T00:24:06+08:00",
    total: 5148,
  },
  {
    id: "7ff3296b-c48c-43f6-b289-b148fab27441",
    no: "OR20211230",
    date: "2021-12-30T03:29:42+08:00",
    customer: {
      name: "Jana",
      phone: "686-534-4485 x21746",
    },
    products: [
      {
        id: "2faa5aea-026b-4ff3-89cd-b00da87f8b9a",
        no: "PR8188",
        name: "Keyboard",
        price: "121",
        qty: 11,
        subTotal: 5280,
      },
      {
        id: "7d498829-379a-4a06-a504-f67be47549e9",
        no: "PR3637",
        name: "Computer",
        price: "117",
        qty: 23,
        subTotal: 2680,
      },
      {
        id: "6413f517-dc17-424c-bc61-9a0f3c334687",
        no: "PR5608",
        name: "Cheese",
        price: "135",
        qty: 1,
        subTotal: 3450,
      },
    ],
    createAt: "2021-12-30T03:29:42+08:00",
    total: 11410,
  },
  {
    id: "ddaa0836-4a5d-417e-b1c1-c8bb4561f650",
    no: "OR20220108",
    date: "2022-01-08T00:07:27+08:00",
    customer: {
      name: "Margaretta",
      phone: "1-489-672-4672 x80386",
    },
    products: [
      {
        id: "61c994f2-d12f-4250-85a9-9a211128b57f",
        no: "PR8769",
        name: "Shoes",
        price: "101",
        qty: 4,
        subTotal: 6369,
      },
    ],
    createAt: "2022-01-08T00:07:27+08:00",
    total: 6369,
  },
  {
    id: "54ec04a1-e46e-41fb-92b1-741f805f193f",
    no: "OR20220118",
    date: "2022-01-18T15:06:33+08:00",
    customer: {
      name: "Jedidiah",
      phone: "(332) 493-1145",
    },
    products: [
      {
        id: "260705ec-8c00-4fef-8663-f445870bf462",
        no: "PR6935",
        name: "Mouse",
        price: "108",
        qty: 27,
        subTotal: 1026,
      },
      {
        id: "45019c66-a7d9-428b-bb2b-7ba36d3e569d",
        no: "PR5832",
        name: "Sausages",
        price: "189",
        qty: 49,
        subTotal: 5130,
      },
      {
        id: "201e45b6-6553-457f-b2c5-d3c869c00824",
        no: "PR9026",
        name: "Gloves",
        price: "172",
        qty: 1,
        subTotal: 5983,
      },
    ],
    createAt: "2022-01-18T15:06:33+08:00",
    total: 12139,
  },
  {
    id: "fd1bd60a-7e8e-4a57-8a66-f2345f1277b3",
    no: "OR20220314",
    date: "2022-03-14T11:14:23+08:00",
    customer: {
      name: "Graham",
      phone: "(329) 633-2703 x5601",
    },
    products: [
      {
        id: "94f69a34-d506-4956-ab06-773adf308538",
        no: "PR6566",
        name: "Ball",
        price: "189",
        qty: 2,
        subTotal: 266,
      },
      {
        id: "d49cd4a4-db52-437d-8e59-ed004075ace7",
        no: "PR2892",
        name: "Bike",
        price: "122",
        qty: 48,
        subTotal: 5822,
      },
      {
        id: "80c4ae47-9029-43b7-9bed-84c833727004",
        no: "PR6941",
        name: "Shoes",
        price: "157",
        qty: 20,
        subTotal: 2920,
      },
      {
        id: "e2a7277f-6388-4076-9d79-195812d86ad4",
        no: "PR2043",
        name: "Shoes",
        price: "120",
        qty: 42,
        subTotal: 774,
      },
    ],
    createAt: "2022-03-14T11:14:23+08:00",
    total: 9782,
  },
  {
    id: "474e084b-016c-4968-9433-f5f7b9166359",
    no: "OR20220318",
    date: "2022-03-18T23:50:37+08:00",
    customer: {
      name: "Zackery",
      phone: "(476) 888-1638 x67361",
    },
    products: [
      {
        id: "2abb41ef-487d-4e2d-9e76-a6217ec5f4b4",
        no: "PR1050",
        name: "Chicken",
        price: "155",
        qty: 24,
        subTotal: 3944,
      },
      {
        id: "80847754-3273-4e7d-9db2-cf79c99ae042",
        no: "PR4918",
        name: "Chicken",
        price: "138",
        qty: 35,
        subTotal: 5177,
      },
      {
        id: "07d2e75e-d179-4994-9629-aa0edada2e97",
        no: "PR2331",
        name: "Pants",
        price: "177",
        qty: 42,
        subTotal: 655,
      },
      {
        id: "f7b6d8d5-9536-4e02-a350-b1654e873f53",
        no: "PR9304",
        name: "Keyboard",
        price: "186",
        qty: 13,
        subTotal: 1534,
      },
    ],
    createAt: "2022-03-18T23:50:37+08:00",
    total: 11310,
  },
  {
    id: "17fda7ec-5bb5-4f98-8cae-0d62cc80ad5e",
    no: "OR20220402",
    date: "2022-04-02T20:40:59+08:00",
    customer: {
      name: "Mose",
      phone: "611-949-5534",
    },
    products: [
      {
        id: "3e96380a-c3e9-440e-995d-4a60067d60a4",
        no: "PR1055",
        name: "Sausages",
        price: "129",
        qty: 12,
        subTotal: 3699,
      },
      {
        id: "7f80fbb9-4c06-491a-9ccc-03fa144e354d",
        no: "PR2876",
        name: "Mouse",
        price: "168",
        qty: 20,
        subTotal: 5720,
      },
      {
        id: "aaee8dc8-b5e4-4916-a3d0-c77ada04bcea",
        no: "PR1122",
        name: "Chair",
        price: "145",
        qty: 5,
        subTotal: 917,
      },
      {
        id: "8d32e9da-2c40-4f9f-8888-665db0ac4f33",
        no: "PR2902",
        name: "Table",
        price: "155",
        qty: 16,
        subTotal: 1416,
      },
    ],
    createAt: "2022-04-02T20:40:59+08:00",
    total: 11752,
  },
  {
    id: "6e2e49b7-1c7e-4d29-b7d9-ab4e95fd1bd7",
    no: "OR20220619",
    date: "2022-06-19T09:58:52+08:00",
    customer: {
      name: "Julian",
      phone: "1-466-316-1793 x50734",
    },
    products: [
      {
        id: "869f01e6-faba-4eb8-99fe-05b0f491ee0a",
        no: "PR6146",
        name: "Fish",
        price: "145",
        qty: 24,
        subTotal: 1510,
      },
    ],
    createAt: "2022-06-19T09:58:52+08:00",
    total: 1510,
  },
  {
    id: "cc12a2dc-2d03-4131-813b-7817b1185ad0",
    no: "OR20220916",
    date: "2022-09-16T19:44:59+08:00",
    customer: {
      name: "Mabel",
      phone: "605.702.4479 x541",
    },
    products: [
      {
        id: "9903f5ce-42b8-4597-99bb-a8a1a9eb996b",
        no: "PR4990",
        name: "Shirt",
        price: "171",
        qty: 21,
        subTotal: 7854,
      },
      {
        id: "f58ff5d0-ed72-42eb-9e2b-618a9a6f5700",
        no: "PR1675",
        name: "Hat",
        price: "191",
        qty: 37,
        subTotal: 242,
      },
      {
        id: "c5e3bc18-cf26-4e07-ab0e-7bedd3ab9e3f",
        no: "PR7487",
        name: "Fish",
        price: "146",
        qty: 28,
        subTotal: 2369,
      },
      {
        id: "1fc6d8d1-79dc-4fe0-b9a8-75910e4bd6d1",
        no: "PR4093",
        name: "Soap",
        price: "136",
        qty: 25,
        subTotal: 684,
      },
    ],
    createAt: "2022-09-16T19:44:59+08:00",
    total: 11149,
  },
  {
    id: "ea8de086-b77a-42a4-a81d-76ce4fd40aa5",
    no: "OR20220926",
    date: "2022-09-26T11:42:38+08:00",
    customer: {
      name: "Alia",
      phone: "1-209-329-8884",
    },
    products: [
      {
        id: "91ff680b-584c-4f7b-945c-3200b5736512",
        no: "PR7627",
        name: "Tuna",
        price: "196",
        qty: 30,
        subTotal: 330,
      },
      {
        id: "b6fdbc95-32c4-48ab-bc02-a0cc2a61d761",
        no: "PR2239",
        name: "Fish",
        price: "166",
        qty: 15,
        subTotal: 4370,
      },
      {
        id: "c1f91881-21d9-48f9-a671-21881d1c6bf4",
        no: "PR8713",
        name: "Computer",
        price: "147",
        qty: 10,
        subTotal: 9400,
      },
      {
        id: "2b14dd3b-1811-4e6f-995e-1a5a993ab7d5",
        no: "PR2562",
        name: "Salad",
        price: "178",
        qty: 9,
        subTotal: 5243,
      },
      {
        id: "e94de100-ea2a-4991-ae55-31c527f55377",
        no: "PR5332",
        name: "Bike",
        price: "187",
        qty: 10,
        subTotal: 350,
      },
    ],
    createAt: "2022-09-26T11:42:38+08:00",
    total: 19693,
  },
]

export default data
