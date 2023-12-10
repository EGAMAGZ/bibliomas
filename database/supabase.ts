import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://nkrbtfuexxjtrylwgxbr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rcmJ0ZnVleHhqdHJ5bHdneGJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2ODI2NjEsImV4cCI6MjAxNDI1ODY2MX0.FfwRlSw7qyUSlbd0XGUeYadroQD1ojciaWlVh5Nb8wU",
);

export const Bucket = {
    bibliographyDocuments : "bibliographyDocuments",
}