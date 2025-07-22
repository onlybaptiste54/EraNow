# Guide d'utilisation de l'API de recherche financière

## Configuration des workflows

### 1. Workflow d'indexation optimisé
Le fichier `workflow_indexation_optimise.json` contient le workflow corrigé avec :

✅ **Boucle complète** : Traite toutes les 14 URLs
✅ **Nettoyage HTML avancé** : Supprime scripts, styles, nav, footer
✅ **Catégorisation automatique** : Basée sur l'URL
✅ **Métadonnées enrichies** : Titre, description, headers H2
✅ **Chunks optimisés** : 1500 caractères avec 200 de chevauchement
✅ **Namespace dédié** : "via-ap-financial" dans Pinecone
✅ **Déduplication** : Skip les contenus trop courts (<100 caractères)

### 2. API de recherche
Le fichier `workflow_api_recherche.json` crée un endpoint POST `/search-financial`

## Utilisation de l'API de recherche

### Endpoint
```
POST https://votre-n8n-instance.com/webhook/search-financial
```

### Format de requête
```json
{
  "query": "Comment investir dans un PEA ?",
  "topK": 5,
  "category": "PEA",
  "minScore": 0.7
}
```

### Paramètres

| Paramètre | Type | Obligatoire | Description | Défaut |
|-----------|------|-------------|-------------|---------|
| `query` | string | ✅ | Question ou mots-clés (min 3 caractères) | - |
| `topK` | number | ❌ | Nombre de résultats (1-20) | 5 |
| `category` | string | ❌ | Filtrer par catégorie | null |
| `minScore` | number | ❌ | Score minimum de similarité (0-1) | 0.7 |

### Catégories disponibles
- `PEA`
- `PER` 
- `Assurance Vie`
- `SCPI`
- `LMNP`
- `Private Equity`
- `Loi Malraux`
- `Monument Historique`
- `Résidence de Service`
- `Nue-Propriété`
- `Super Livret`
- `Courtage Crédit`
- `Assurance Santé`
- `Assurance Vie Luxembourg`

## Exemples d'utilisation

### 1. Recherche simple
```bash
curl -X POST https://votre-n8n-instance.com/webhook/search-financial \
  -H "Content-Type: application/json" \
  -d '{
    "query": "avantages fiscaux PEA"
  }'
```

### 2. Recherche avec filtrage par catégorie
```bash
curl -X POST https://votre-n8n-instance.com/webhook/search-financial \
  -H "Content-Type: application/json" \
  -d '{
    "query": "plafond versement",
    "category": "PEA",
    "topK": 3
  }'
```

### 3. Recherche avec score minimum élevé
```bash
curl -X POST https://votre-n8n-instance.com/webhook/search-financial \
  -H "Content-Type: application/json" \
  -d '{
    "query": "investissement immobilier SCPI",
    "minScore": 0.8,
    "topK": 10
  }'
```

## Format de réponse

```json
{
  "success": true,
  "query": "avantages fiscaux PEA",
  "results": [
    {
      "id": 1,
      "title": "PEA - Plan d'Épargne en Actions",
      "category": "PEA",
      "description": "Découvrez tous les avantages du PEA...",
      "source_url": "https://www.via-ap.com/conseil-financier/pea/",
      "excerpt": "Le PEA offre de nombreux avantages fiscaux notamment l'exonération d'impôt sur les plus-values après 5 ans...",
      "score": 0.89,
      "relevance": "high"
    }
  ],
  "total": 1,
  "categories": {
    "PEA": [
      {
        "id": 1,
        "title": "PEA - Plan d'Épargne en Actions",
        "category": "PEA",
        "description": "Découvrez tous les avantages du PEA...",
        "source_url": "https://www.via-ap.com/conseil-financier/pea/",
        "excerpt": "Le PEA offre de nombreux avantages fiscaux notamment l'exonération d'impôt sur les plus-values après 5 ans...",
        "score": 0.89,
        "relevance": "high"
      }
    ]
  },
  "filters_applied": {
    "min_score": 0.7,
    "category": null
  },
  "requestId": "1703123456789",
  "timestamp": "2024-01-20T10:30:45.123Z",
  "processing_time_ms": 245
}
```

## Niveaux de pertinence

- **high** : Score > 0.8 (très pertinent)
- **medium** : Score > 0.7 (pertinent)  
- **low** : Score ≤ 0.7 (peu pertinent)

## Intégration dans une application

### JavaScript/Node.js
```javascript
async function searchFinancial(query, options = {}) {
  const response = await fetch('https://votre-n8n-instance.com/webhook/search-financial', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      ...options
    })
  });
  
  return await response.json();
}

// Utilisation
const results = await searchFinancial('investissement SCPI', {
  category: 'SCPI',
  topK: 5
});
```

### Python
```python
import requests

def search_financial(query, **options):
    url = "https://votre-n8n-instance.com/webhook/search-financial"
    payload = {"query": query, **options}
    
    response = requests.post(url, json=payload)
    return response.json()

# Utilisation
results = search_financial(
    "avantages PER", 
    category="PER", 
    topK=3
)
```

## Optimisations mises en place

### Performance
- **Chunks optimisés** : 1500 caractères avec 200 de chevauchement
- **Embeddings haute qualité** : text-embedding-3-large (1024 dimensions)
- **Timeout HTTP** : 30 secondes avec gestion des redirections
- **Namespace dédié** : Organisation claire dans Pinecone

### Qualité des données
- **Nettoyage HTML avancé** : Suppression des éléments non-pertinents
- **Extraction enrichie** : Titre, description, headers H1/H2
- **Catégorisation automatique** : Basée sur l'analyse de l'URL
- **Déduplication** : Évite l'indexation de contenus vides
- **Métadonnées structurées** : Format cohérent pour tous les documents

### Recherche intelligente
- **Validation des paramètres** : Contrôles de saisie
- **Filtrage par score** : Élimination des résultats peu pertinents
- **Groupement par catégorie** : Organisation des résultats
- **Formatage enrichi** : Extraits pertinents et métadonnées complètes