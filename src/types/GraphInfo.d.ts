export type GraphInfo = {
  data: {
    type: string;
    id: 1;
    attributes: {
      name: string;
      inep: number;
      address: string;
      ddd: string;
      phone: string;
      matriculas: number | null;
      docentes: number | null;
      year: number;
      adm: string;
      country?: string;
      region?: string;
      idebIniciais: {
        mean: number;
        projection: number;
      };
      idebFinais: {
        mean: number;
        projection: number;
      };
      ied: {
        meanCategory: string;
        mean: number;
      };
      ird: {
        meanCategory: string;
        mean: number;
      };
      tdi: {
        meanCategory: string;
        mean: number;
      };
      icg: {
        meanCategory: string;
        mean: number;
      };
      afd: {
        meanCategory: string;
        mean: number;
      };
    };
  };
};
