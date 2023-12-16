import { Bibliografias } from "@/generated/client/deno/edge.ts";
import {
  TYPE_FORMATS,
  TYPE_PUBLICATION,
  TypePublication,
} from "@/schema/bibliographie.ts";
import { formatAccessDate } from "@/utils/date.ts";
import { authorsRegex } from "@/utils/regex.ts";

function formatAuthorsName(autors: string) {
  if (!authorsRegex.test(autors)) {
    return autors;
  } else {
    return autors.split(";").map((autor) => {
      const [name, lastname] = autor.split(" ");
      return `${lastname}, ${name[0]}.`;
    }).join(", ");
  }
}

interface Reference {
  generate(bibliography: Bibliografias): string;
}

// Formato APA
class ApaWebSiteReference implements Reference {
  generate(bibliography: Bibliografias): string {
    const authors = formatAuthorsName(bibliography.txt_aut_biblio);
    const year = bibliography.txt_fecha_pub_biblio ?? "s.f.";
    const title = bibliography.txt_tit_biblio;
    const webSiteName = bibliography.txt_pag_biblio !== authors
      ? `${bibliography.txt_pag_biblio}. `
      : "";
    const accesDate = bibliography.txt_fecha_acc_biblio
      ? `Recuperado el ${
        formatAccessDate(bibliography.txt_fecha_acc_biblio, navigator.language)
      } de `
      : "";
    const url = bibliography.txt_url_biblio;

    const reference =
      `${authors} (${year}). ${title}. ${webSiteName}${accesDate}${url}.`;
    return reference;
  }
}

class ApaBookReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class ApaMagazineReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class ApaNewspaperReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class ApaMoviesReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class ApaOthersReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

// Formato Chicago

class ChicagoWebSiteReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class ChicagoBookReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class ChicagoMagazineReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class ChicagoNewspaperReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class ChicagoMoviesReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class ChicagoOthersReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

interface AbstractRefrenceFactory {
  createRefecence(bibliography: Bibliografias): Reference;
}

// Formato Mla

class MlaWebSiteReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class MlaBookReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class MlaMagazineReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class MlaNewspaperReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class MlaMoviesReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class MlaOthersReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

// Formato Ieee

class IeeeWebSiteReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class IeeeBookReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class IeeeMagazineReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class IeeeNewspaperReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class IeeeMoviesReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class IeeeOthersReference implements Reference {
  generate(bibliography: Bibliografias): string {
    return "";
  }
}

class ApaReferenceFactory implements AbstractRefrenceFactory {
  createRefecence(bibliography: Bibliografias): Reference {
    switch (bibliography.txt_tip_biblio) {
      case TYPE_PUBLICATION.SitioWeb:
        return new ApaWebSiteReference();
      case TYPE_PUBLICATION.Libro:
        return new ApaBookReference();
      case TYPE_PUBLICATION.ArticuloRevista:
        return new ApaMagazineReference();
      case TYPE_PUBLICATION.ArticuloPeriodico:
        return new ApaNewspaperReference();
      case TYPE_PUBLICATION.Peliculas:
        return new ApaMoviesReference();
      case TYPE_PUBLICATION.Varios:
        return new ApaOthersReference();
      default:
        return new ApaOthersReference();
    }
  }
}

class ChicagoReferenceFactory implements AbstractRefrenceFactory {
  createRefecence(bibliography: Bibliografias): Reference {
    switch (bibliography.txt_tip_biblio) {
      case TYPE_PUBLICATION.SitioWeb:
        return new ChicagoWebSiteReference();
      case TYPE_PUBLICATION.Libro:
        return new ChicagoBookReference();
      case TYPE_PUBLICATION.ArticuloRevista:
        return new ChicagoMagazineReference();
      case TYPE_PUBLICATION.ArticuloPeriodico:
        return new ChicagoNewspaperReference();
      case TYPE_PUBLICATION.Peliculas:
        return new ChicagoMoviesReference();
      case TYPE_PUBLICATION.Varios:
        return new ChicagoOthersReference();
      default:
        return new ChicagoOthersReference();
    }
  }
}

class MlaReferenceFactory implements AbstractRefrenceFactory {
  createRefecence(bibliography: Bibliografias): Reference {
    switch (bibliography.txt_tip_biblio) {
      case TYPE_PUBLICATION.SitioWeb:
        return new MlaWebSiteReference();
      case TYPE_PUBLICATION.Libro:
        return new MlaBookReference();
      case TYPE_PUBLICATION.ArticuloRevista:
        return new MlaMagazineReference();
      case TYPE_PUBLICATION.ArticuloPeriodico:
        return new MlaNewspaperReference();
      case TYPE_PUBLICATION.Peliculas:
        return new MlaMoviesReference();
      case TYPE_PUBLICATION.Varios:
        return new MlaOthersReference();
      default:
        return new MlaOthersReference();
    }
  }
}

class IeeeReferenceFactory implements AbstractRefrenceFactory {
  createRefecence(bibliography: Bibliografias): Reference {
    switch (bibliography.txt_tip_biblio) {
      case TYPE_PUBLICATION.SitioWeb:
        return new IeeeWebSiteReference();
      case TYPE_PUBLICATION.Libro:
        return new IeeeBookReference();
      case TYPE_PUBLICATION.ArticuloRevista:
        return new IeeeMagazineReference();
      case TYPE_PUBLICATION.ArticuloPeriodico:
        return new IeeeNewspaperReference();
      case TYPE_PUBLICATION.Peliculas:
        return new IeeeMoviesReference();
      case TYPE_PUBLICATION.Varios:
        return new IeeeOthersReference();
      default:
        return new IeeeOthersReference();
    }
  }
}

function createFactory(bibliography: Bibliografias): AbstractRefrenceFactory {
  switch (bibliography.txt_fmt_biblio) {
    case TYPE_FORMATS.Apa:
      return new ApaReferenceFactory();
    case TYPE_FORMATS.Chicago:
      return new ChicagoReferenceFactory();
    case TYPE_FORMATS.Mla:
      return new MlaReferenceFactory();
    case TYPE_FORMATS.Ieee:
      return new IeeeReferenceFactory();
    default:
      return new ApaReferenceFactory();
  }
}

export function generateReference(bibliography: Bibliografias): string {
  const factory = createFactory(bibliography);
  const reference = factory.createRefecence(bibliography);
  return reference.generate(bibliography);
}
