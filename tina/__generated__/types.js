export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const PackagesPartsFragmentDoc = gql`
    fragment PackagesParts on Packages {
  __typename
  headerKickerEs
  headerKickerEn
  headerTitleEs
  headerTitleEn
  items {
    __typename
    image
    nameEs
    nameEn
    nightsEs
    nightsEn
    descEs
    descEn
    priceEs
    priceEn
    panel
    objPos
    details {
      __typename
      icon
      es
      en
    }
  }
  noteEs
  noteEn
}
    `;
export const PackagesDocument = gql`
    query packages($relativePath: String!) {
  packages(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PackagesParts
  }
}
    ${PackagesPartsFragmentDoc}`;
export const PackagesConnectionDocument = gql`
    query packagesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PackagesFilter) {
  packagesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PackagesParts
      }
    }
  }
}
    ${PackagesPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    packages(variables, options) {
      return requester(PackagesDocument, variables, options);
    },
    packagesConnection(variables, options) {
      return requester(PackagesConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
