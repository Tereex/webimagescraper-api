declare module '@apiverve/webimagescraper' {
  export interface webimagescraperOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface webimagescraperResponse {
    status: string;
    error: string | null;
    data: WebsiteImagesScraperData;
    code?: number;
  }


  interface WebsiteImagesScraperData {
      imageCount:      number;
      images:          Image[];
      maxLinksReached: boolean;
      url:             string;
  }
  
  interface Image {
      external: boolean;
      src:      string;
  }

  export default class webimagescraperWrapper {
    constructor(options: webimagescraperOptions);

    execute(callback: (error: any, data: webimagescraperResponse | null) => void): Promise<webimagescraperResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: webimagescraperResponse | null) => void): Promise<webimagescraperResponse>;
    execute(query?: Record<string, any>): Promise<webimagescraperResponse>;
  }
}
