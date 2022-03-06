var pregrado = [
  {{ range $index, $page := (where .Site.Pages "Section" "docs") -}}
    {
      id: {{ $index }},
      title: "{{ .Title }}",
      description: "{{ .Params.description }}",
      href: "{{ .URL | relURL }}"
    },
  {{ end -}}
  ];