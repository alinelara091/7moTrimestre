const supabaseClient = supabase.createClient('https://onwaaxsjufhmxndkqilp.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ud2FheHNqdWZobXhuZGtxaWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4ODM3MjYsImV4cCI6MjA4MDQ1OTcyNn0.Q7fR8J6x7TZcIjWhBjoIBUtc--GUK3a6JbWxbxfKGfA',{
            db: {schema: "public"}
        }
    );

(async () => {
    const response = await supabaseClient.from("Base de datos con Supabase").
    select("SETList.NombreCancion")
    console.log (response)
    document.getElementById("NombreCancion").innerHTML = JSON.stringify(response, null, 2)
    })()