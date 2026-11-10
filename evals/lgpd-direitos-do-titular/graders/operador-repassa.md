---
type: regex
pattern: '(?:(?:repass|encaminh|envi|remet|transmit)\w*|\blev(?:a|am|ar|e|em)\s+(?:o\s+pedido|a\s+solicita[çc][ãa]o|o\s+requerimento))(?:(?!respost|(?:\bao|\bpara\s+[oa])\s+(?:pr[óo]prio\s+)?(?:titular|usu[áa]rio))[^\n]){0,80}?\bcontrolador'
flags: i
---

A resposta diz que o operador que recebe o pedido o repassa ao controlador e segue as instruções dele (LGPD, art. 18, caput, e art. 39). Aceita um verbo de repasse ("repassa", "encaminha", "envia", "remete", "transmite", "leva o pedido", "leva a solicitação") seguido de "controlador" em até 80 caracteres, na mesma linha. Não conta o trecho que fala da resposta ou do envio ao titular ou ao usuário, como "envia a resposta ao titular, como o controlador mandar". Limite: não confere negação, e "não repasse ao controlador" também casa.
