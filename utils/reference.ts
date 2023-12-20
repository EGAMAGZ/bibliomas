import { Bibliografias } from "@/generated/client/deno/edge.ts";
import {
  BookBibliographie,
  MoreBibliographie,
  TYPE_FORMATS,
  TYPE_PUBLICATION,
  TypeFormat,
  WebSiteBibliographie,
} from "@/schema/bibliographie.ts";
import { authorsRegex } from "@/utils/regex.ts";

const formatApaAccessDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return new Intl.DateTimeFormat(navigator.language, options).format(date);
};

function formatApaAuthorsName(authors: string) {
  if (!authorsRegex.test(authors)) {
    return authors;
  }
  const authorsList = authors.split(";");
  if (authorsList.length === 1) {
    const [name, lastname] = authorsList[0].split(" ");

    return `${lastname}, ${name[0]}.`;
  }

  return authorsList.map((author, index, array) => {
    const [name, lastname] = author.split(" ");

    return `${array.length === index + 1 ? "y " : ""} ${lastname}, ${name[0]}.`;
  }).join(", ");
}

function getDirectorTitle(authors: string) {
  if (!authorsRegex.test(authors)) {
    return "Director";
  }
  const authorsList = authors.split(";");
  if (authorsList.length === 1) {
    return "Director";
  }
  return "Directores";
}

interface Reference {
  generate(bibliography: Bibliografias): string;
}

// Formato APA
class ApaWebSiteReference implements Reference {
  generate(bibliography: Bibliografias): string {
    const info = bibliography as WebSiteBibliographie;

    const authors = formatApaAuthorsName(info.txt_aut_biblio);
    const year = info.txt_fecha_pub_biblio ?? "s.f.";
    const title = info.txt_tit_biblio;
    const webSiteName = info.txt_pag_biblio !== authors
      ? `${info.txt_pag_biblio}. `
      : "";
    const accesDate = info.txt_fecha_acc_biblio
      ? `Recuperado el ${formatApaAccessDate(info.txt_fecha_acc_biblio)} de `
      : "";
    const url = info.txt_url_biblio;

    const reference =
      `${authors} (${year}). ${title}. ${webSiteName}${accesDate}${url}`;
    return reference;
  }
}

class ApaBookReference implements Reference {
  generate(bibliography: Bibliografias): string {
    const info = bibliography as BookBibliographie;

    const authors = formatApaAuthorsName(bibliography.txt_aut_biblio);
    const year = bibliography.txt_fecha_pub_biblio;
    const title = bibliography.txt_tit_biblio;
    const editorial = bibliography.txt_edit_biblio;
    const url = info.txt_url_biblio ?? "";
    const edition = info.num_edic_biblio ? `${info.num_edic_biblio}° ed.` : "";
    const volume = info.num_volm_biblio ? `Vol. ${info.num_volm_biblio}` : "";
    const page = info.num_npag_biblio ? `pp. ${info.num_npag_biblio}` : "";

    const bibliographicDataJoined = [edition, volume, page].filter((i) => i)
      .join(", ");
    const bibliographicData = bibliographicDataJoined
      ? `(${bibliographicDataJoined})`
      : "";

    const reference =
      `${authors} ${year}. ${title} ${bibliographicData}. ${editorial}. ${url}`;
    return reference;
  }
}

class ApaMagazineReference implements Reference {
  generate(bibliography: Bibliografias): string {
    const info = bibliography as MoreBibliographie;

    const authors = formatApaAuthorsName(info.txt_aut_biblio);
    const year = info.txt_fecha_pub_biblio ?? "s.f.";
    const title = info.txt_tit_biblio;
    const magazineName = info.txt_edit_biblio;
    const url = info.txt_url_biblio ?? "";

    const reference = `${authors} (${year}). ${title}. ${magazineName}.${url}`;
    return reference;
  }
}

class ApaNewspaperReference implements Reference {
  generate(bibliography: Bibliografias): string {
    const info = bibliography as MoreBibliographie;

    const authors = formatApaAuthorsName(info.txt_aut_biblio);
    const year = info.txt_fecha_pub_biblio ?? "s.f.";
    const title = info.txt_tit_biblio;
    const newspaperName = info.txt_edit_biblio;
    const url = info.txt_url_biblio ?? "";

    const reference = `${authors} (${year}). ${title}. ${newspaperName}.${url}`;
    return reference;
  }
}

class ApaMoviesReference implements Reference {
  generate(bibliography: Bibliografias): string {
    const info = bibliography as MoreBibliographie;

    const authors = formatApaAuthorsName(info.txt_aut_biblio);
    const directorTitle = getDirectorTitle(info.txt_aut_biblio);
    const year = info.txt_fecha_pub_biblio ?? "s.f.";
    const title = info.txt_tit_biblio;
    const producer = info.txt_edit_biblio;

    const reference =
      `${authors} (${directorTitle}). (${year}). ${title} [Película]. ${producer}.`;
    return reference;
  }
}

// Formato Chicago

const formatChicagoAuthorsName = (authors: string) => {
  if (!authorsRegex.test(authors)) {
    return authors;
  }

  const authorsList = authors.split(";");

  if (authorsList.length === 1) {
    const [name, lastname] = authorsList[0].split(" ");
    return `${lastname}, ${name}.`;
  }

  return authorsList.map((author, index, array) => {
    const [name, lastname] = author.split(" ");
    if (index === array.length - 1) {
      return `y ${lastname}, ${name}.`;
    }
    return `${lastname}, ${name}`;
  }).join(", ");
};

const formatChicagoAccessDate = (date: Date) => {
  const month = date.toLocaleString(navigator.language, { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

class ChicagoWebSiteReference implements Reference {
  generate(bibliography: Bibliografias): string {
    const info = bibliography as WebSiteBibliographie;

    const authors = formatChicagoAuthorsName(bibliography.txt_aut_biblio);
    const title = bibliography.txt_tit_biblio;
    const webSiteName = info.txt_pag_biblio;
    const year = info.txt_fecha_pub_biblio ?? "s.f.";
    const url = info.txt_url_biblio;
    const accesDate = info.txt_fecha_acc_biblio
      ? `Accedido el ${
        formatChicagoAccessDate(new Date(info.txt_fecha_acc_biblio))
      }. `
      : "";

    return `${authors} ${year}. ${title}. ${webSiteName}. ${accesDate}${url}`;
  }
}

class ChicagoBookReference implements Reference {
  generate(bibliography: Bibliografias): string {
    const info = bibliography as BookBibliographie;

    const authors = formatChicagoAuthorsName(bibliography.txt_aut_biblio);
    const title = bibliography.txt_tit_biblio;
    const year = info.txt_fecha_pub_biblio ?? "s.f.";
    const edition = info.num_edic_biblio ? `${info.num_edic_biblio}.` : "";
    const placePublished = info.txt_ubic_biblio ?? "";
    const editorial = info.txt_edit_biblio ?? "";
    const page = info.num_npag_biblio ? `${info.num_npag_biblio}.` : "";

    return `${authors} ${year}.${title}.${edition}${placePublished}:${editorial}, ${year}.${page}`;
  }
}

class ChicagoMagazineReference implements Reference {
  generate(bibliography: Bibliografias): string {
    const info = bibliography as MoreBibliographie;

    const authors = formatChicagoAuthorsName(bibliography.txt_aut_biblio);

    const title = bibliography.txt_tit_biblio;
    const year = info.txt_fecha_pub_biblio;
    const magazineName = info.txt_edit_biblio;
    const url = info.txt_url_biblio ?? "";

    const reference = `${authors}. "${title}".${magazineName}.${year}.${url}`;
    return reference;
  }
}

class ChicagoNewspaperReference implements Reference {
  generate(bibliography: Bibliografias): string {
    const info = bibliography as MoreBibliographie;

    const authors = formatChicagoAuthorsName(info.txt_aut_biblio);
    const year = info.txt_fecha_pub_biblio ?? "s.f.";
    const title = info.txt_tit_biblio;
    const newspaperName = info.txt_edit_biblio;
    const url = info.txt_url_biblio ?? "";

    const reference = `${authors}"${title}".${newspaperName}.${year}.${url}`;
    return reference;
  }
}

class ChicagoMoviesReference implements Reference {
  generate(bibliography: Bibliografias): string {
    const info = bibliography as MoreBibliographie;

    const authors = formatChicagoAuthorsName(bibliography.txt_aut_biblio);
    const directorTitle = getDirectorTitle(bibliography.txt_aut_biblio);
    const title = bibliography.txt_tit_biblio;
    const year = info.txt_fecha_pub_biblio
      ? `${info.txt_fecha_pub_biblio}.`
      : "s.f.";
    const producer = info.txt_edit_biblio;
    const url = info.txt_url_biblio ?? "";

    const reference =
      `${authors}, ${directorTitle}. ${title}. ${producer}. ${year} ${url}`;
    return reference;
  }
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
      default:
        return new ApaWebSiteReference();
    }
  }
}

interface AbstractRefrenceFactory {
  createRefecence(bibliography: Bibliografias): Reference;
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
      default:
        return new ChicagoWebSiteReference();
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
      default:
        return new MlaWebSiteReference();
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
      default:
        return new IeeeWebSiteReference();
    }
  }
}

function createFactory(format: TypeFormat): AbstractRefrenceFactory {
  switch (format) {
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
  const factory = createFactory(bibliography.txt_fmt_biblio);
  const reference = factory.createRefecence(bibliography);
  return reference.generate(bibliography);
}
