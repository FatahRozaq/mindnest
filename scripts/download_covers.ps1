$books = @(
  @{isbn='9780735211292'; slug='atomic-habits'},
  @{isbn='9780062315007'; slug='sang-alkemis'},
  @{isbn='9780062316097'; slug='sapiens'},
  @{isbn='9781612680194'; slug='rich-dad-poor-dad'},
  @{isbn='9780143130727'; slug='ikigai'},
  @{isbn='9781455586691'; slug='deep-work'},
  @{isbn='9781577314806'; slug='the-power-of-now'},
  @{isbn='9780374533557'; slug='thinking-fast-and-slow'}
)

$dest = Join-Path (Get-Location) 'public/images/books'
if (!(Test-Path $dest)) { New-Item -ItemType Directory -Path $dest -Force | Out-Null }

foreach ($b in $books) {
  $isbn = $b.isbn
  $slug = $b.slug
  Write-Output "Processing $slug (ISBN: $isbn)"
  try {
    $url = "https://www.googleapis.com/books/v1/volumes?q=isbn:$isbn"
    $resp = Invoke-RestMethod -Uri $url -UseBasicParsing -ErrorAction Stop
    $imgUrl = $null
    if ($resp.totalItems -gt 0 -and $resp.items[0].volumeInfo.imageLinks -ne $null) {
      $links = $resp.items[0].volumeInfo.imageLinks
      foreach ($k in 'extraLarge','large','medium','small','thumbnail') {
        if ($links.$k) { $imgUrl = $links.$k; break }
      }
    }

    if (-not $imgUrl) {
      $imgUrl = "https://covers.openlibrary.org/b/isbn/$isbn-L.jpg"
      Write-Output " - No Google image, using OpenLibrary fallback: $imgUrl"
    } else {
      Write-Output " - Found Google Books image: $imgUrl"
    }

    if ($imgUrl) {
      # ensure https
      $imgUrl = $imgUrl -replace '^http:','https:'
      $out = Join-Path $dest ($slug + '.jpg')
      Invoke-WebRequest -Uri $imgUrl -OutFile $out -UseBasicParsing -ErrorAction Stop
      Write-Output " - Saved to $out"
    }
  } catch {
    Write-Output ("Failed to download {0}: {1}" -f $slug, $_.Exception.Message)
  }
}
Write-Output 'Done.'
