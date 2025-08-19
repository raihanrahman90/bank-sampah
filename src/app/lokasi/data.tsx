type Lokasi = {
  id: number;
  name: string;
  url: string;
  jamBuka: JamBuka;
};

type JamBuka = {
  senin: string;
  selasa: string;
  rabu: string;
  kamis: string;
  jumat: string;
  sabtu: string;
  minggu: string;
};

const LokasiBankSampah: Lokasi[] = [
  {
    id: 1,
    name: "Guling bersinar",
    url: "",
    jamBuka: {
      senin: "08.00-10.00",
      selasa: "08.00-10.00",
      rabu: "08.00-10.00",
      kamis: "08.00-10.00",
      jumat: "08.00-10.00",
      sabtu: "08.00-10.00",
      minggu: "08.00-10.00",
    },
  },
  {
    id: 2,
    name: "sehati",
    url: "",
    jamBuka: {
      senin: "08.00-10.00",
      selasa: "08.00-10.00",
      rabu: "08.00-10.00",
      kamis: "08.00-10.00",
      jumat: "08.00-10.00",
      sabtu: "08.00-10.00",
      minggu: "08.00-10.00",
    },
  },
  {
    id: 3,
    name: "violet",
    url: "",
    jamBuka: {
      senin: "08.00-10.00",
      selasa: "08.00-10.00",
      rabu: "08.00-10.00",
      kamis: "08.00-10.00",
      jumat: "08.00-10.00",
      sabtu: "08.00-10.00",
      minggu: "08.00-10.00",
    },
  },
  {
    id: 4,
    name: "anggrek",
    url: "",
    jamBuka: {
      senin: "08.00-10.00",
      selasa: "08.00-10.00",
      rabu: "08.00-10.00",
      kamis: "08.00-10.00",
      jumat: "08.00-10.00",
      sabtu: "08.00-10.00",
      minggu: "08.00-10.00",
    },
  },
  {
    id: 5,
    name: "gms 06",
    url: "",
    jamBuka: {
      senin: "08.00-10.00",
      selasa: "08.00-10.00",
      rabu: "08.00-10.00",
      kamis: "08.00-10.00",
      jumat: "08.00-10.00",
      sabtu: "08.00-10.00",
      minggu: "08.00-10.00",
    },
  },
];

export default LokasiBankSampah;
