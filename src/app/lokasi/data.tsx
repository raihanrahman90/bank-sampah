type Lokasi = {
  id: number;
  name: string;
  url: string;
  schedule?: string;
  contact?: string;
  address?: string;
};

const LokasiBankSampah: Lokasi[] = [
  {
    id: 1,
    name: "Guling bersinar",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6969602880217!2d117.17643009999999!3d-0.44688940000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df5d620d58ff63b%3A0x7e4dea1ef77008fe!2sKantor%20Kelurahan%20Gunung%20Lingai!5e0!3m2!1sid!2sid!4v1755824319889!5m2!1sid!2sid",
    schedule: "Minggu, 08.00:10.00",
    contact: "0852-4528-7279",
    address: "kantor kelurahan gunung lingai rt.03",
  },
  {
    id: 2,
    name: "sehati",
    url: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.7035183181742!2d117.17602367496471!3d-0.43464719956108955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjYnMDQuNyJTIDExN8KwMTAnNDMuMCJF!5e0!3m2!1sid!2sid!4v1755824406548!5m2!1sid!2sid",
    schedule: "Minggu, 08.00:10.00",
    contact: "0822-5333-4304",
    address: "Jalan lempake tepian rt.02",
  },
  {
    id: 3,
    name: "violet",
    url: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.701824511833!2d117.18238087496465!3d-0.4378418995578616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjYnMTYuMiJTIDExN8KwMTEnMDUuOCJF!5e0!3m2!1sid!2sid!4v1755824429412!5m2!1sid!2sid",
    schedule: "Minggu, 08.00:10.00",
    contact: "0857-2716-3967",
    address: "Perum graha mandiri 2 RT.02",
  },
  {
    id: 4,
    name: "anggrek",
    url: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.6974738160875!2d117.1732077749647!3d-0.4459428995496814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjYnNDUuNCJTIDExN8KwMTAnMzIuOCJF!5e0!3m2!1sid!2sid!4v1755824450201!5m2!1sid!2sid",
    schedule: "Minggu, 08.00:10.00",
    contact: "0813-4644-3623",
    address: "jalan gunung lingai rt.03",
  },
  {
    id: 5,
    name: "gms 06",
    url: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.6949326964786!2d117.16849757496465!3d-0.45060709954497247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjcnMDIuMiJTIDExN8KwMTAnMTUuOSJF!5e0!3m2!1sid!2sid!4v1755824347225!5m2!1sid!2sid",
    schedule: "Minggu, 08.00:10.00",
    contact: "0823-5161-5577",
    address: "PERUM GRIYA MUKTI SEJAHTERA RT. 06",
  },
  {
    id: 6,
    name: "mawar merah",
    url: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.6967117880054!2d117.16813507496465!3d-0.44734669954826656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjYnNTAuNSJTIDExN8KwMTAnMTQuNiJF!5e0!3m2!1sid!2sid!4v1755824366013!5m2!1sid!2sid",
    schedule: "Minggu, 08.00:10.00",
    contact: "0821-5520-8208",
    address: "jalan pipit raya rt.08",
  },
  {
    id: 7,
    name: "pilar sejati",
    url: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.6910353467815!2d117.1741200749647!3d-0.4576682995378438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjcnMjcuNiJTIDExN8KwMTAnMzYuMSJF!5e0!3m2!1sid!2sid!4v1755824386738!5m2!1sid!2sid",
    schedule: "Minggu, 08.00:10.00",
    contact: "0812-4010-4442",
    address: "jalan TRI DHARMA RT.12",
  },
  {
    id: 8,
    name: "sampurna",
    url: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.689026334404!2d117.17475507496464!3d-0.46126599953421005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjcnNDAuNiJTIDExN8KwMTAnMzguNCJF!5e0!3m2!1sid!2sid!4v1755824024712!5m2!1sid!2sid",
    schedule: "Minggu, 08.00:10.00",
    contact: "0812-5538-874",
    address: "jalan jalan di. panjaitan rt.16",
  },
  {
    id: 9,
    name: "mawar",
    url: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.6900749359206!2d117.17980707496467!3d-0.4593916995361019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjcnMzMuOCJTIDExN8KwMTAnNTYuNiJF!5e0!3m2!1sid!2sid!4v1755824241414!5m2!1sid!2sid",
    schedule: "Minggu, 08.00:10.00",
    contact: "0821-5647-1900",
    address: "jalan DI.PANJAITAN GANG. sayur rt.20",
  },

  {
    id: 10,
    name: "matahari",
    url: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.690834747051!2d117.18124467496466!3d-0.4580287995374798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjcnMjguOSJTIDExN8KwMTEnMDEuOCJF!5e0!3m2!1sid!2sid!4v1755824476719!5m2!1sid!2sid",
    schedule: "Minggu, 08.00:10.00",
    contact: "0812-5509-829",
    address: "perum sejahtera permai rt.21",
  },
  {
    id: 11,
    name: "pandurata",
    url: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.6950740586494!2d117.17202847496463!3d-0.45034889954523105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjcnMDEuMyJTIDExN8KwMTAnMjguNiJF!5e0!3m2!1sid!2sid!4v1755824191198!5m2!1sid!2sid",
    schedule: "Minggu, 08.00:10.00",
    contact: "0813-4710-4411",
    address: "jalan gunung lingai rt.22",
  },
];

export default LokasiBankSampah;
