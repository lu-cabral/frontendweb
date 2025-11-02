# GitFlow Configuration
# Este projeto segue o modelo GitFlow para organização de branches

## Branches principais:
# - main: código em produção (releases estáveis)
# - develop: branch de integração para desenvolvimento

## Branches de apoio:
# - feature/*: novas funcionalidades
# - release/*: preparação de releases
# - hotfix/*: correções críticas em produção

## Convenções de nomenclatura:
# feature/[nome-da-funcionalidade]
# release/[versão]
# hotfix/[descrição-do-fix]

## Fluxo de trabalho:
# 1. Feature branches partem de develop
# 2. Features são mergeadas de volta para develop
# 3. Release branches partem de develop
# 4. Releases são mergeadas para main e develop
# 5. Hotfixes partem de main e são mergeadas para main e develop