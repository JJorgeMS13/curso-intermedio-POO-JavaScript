export default [
    {
      title: "Telefónica",
      icon: "call",
      path: "",
      permission: "Cliente-Obtener",
      items: [
        {
          title: "Unidad de Negocios",
          icon: "sort",
          path: "/UnidadeNegocio",
          permission: "AdecuacionesDineraliaUnidad-Mostrar"
        }
      ]
    },
    {
      title: 'Tablero de Adm. y Control',
      icon: 'account_balance_wallet',
      path: '',
      permission: 'TablerosAdministracionControl-Obtener',
      items: [
        {
          title: 'Cobranza Campo',
          icon: 'insert_chart',
          path: '/CobranzaCampo',
          permission: 'TableroCobranzaCampo-Obtener'
        },
        {
          title: 'Revisión Cartera',
          icon: 'insert_chart',
          path: '/RevisionCartera',
          permission: 'TableroRevisionCartera-Obtener',
        },
        {
          title: 'Legal Corporativo',
          icon: 'receipt',
          path: '/LegalCorporativo',
          permission: 'TableroLegalCorporativo-Obtener'
        },
        {
          title: 'Legal Mercantil',
          icon: 'gavel',
          path: '',
          permission: 'LegalMercantil-Obtener',
          items: [
            {
              title: 'Tablero de Administración y Control Legal Mercantil',
              icon: 'insert_chart',
              path: '/TableroLegalMercantil',
              permission: 'TableroLegalMercantil-Obtener',
            },
            {
              title: 'PROYECTO DE DEMANDA',
              icon: 'gavel',
              path: '/ProyectoDemanda',
              permission: 'ProyectoDemanda-Obtener',
            }             
          ]
        },
      ]
    },
    {
      title: "Administrativa",
      icon: "work",
      path: "",
      permission: "Administrativa-Obtener",
      items: [
        {
          title: "Asignación de Cartera",
          icon: "device_hub",
          path: "",
          permission: "AsignacionCartera-Obtener",
          items: [
            
            {
              title: "Menú de Configuraciones",
              icon: "list_alt",
              path: "/asignaCarteraConfig",
              permission: "ConfiguracionAsignCartera-Obtener"
            },
            {
              title: "Tablero Contracargos",
              icon: "note",
              path: "/tableroContracargos",
              permission: "TableroContracargos-Obtener"
            },
            {
              title: "Tablero de Administración y Control Subconcentradoras",
              icon: "location_on",
              path: "/subConcentradora",
              permission: "TableroAdmControlSubConcen-Obtener"
            },
            
            {
              title: "Reporte historico subconcentradoras",
              icon: "summarize",
              path: "/reporteHistoricoSubNatural",
              permission: "HistoricoSubConcen-Obtener"
            },
            {
              title: "Registro de Actividad",
              icon: "history",
              path: "/registroDeActividad",
              permission: "RegistroActividad-Obtener"
            },
            //   ]
            // },
            {
              title: "Catalogo",
              icon: "ballot",
              path: "",
              permission: "Catalogos-Obtener",
              items: [
                {
                  title: "Rutas de Cobranza",
                  icon: "public",
                  path: "/rutas_cobranza",
                  permission: "RutaCobranza-Obtener"
                },
                {
                  title: "Catalogo apartados app",
                  icon: "work_outline",
                  path: "/apartados_app",
                  permission: "TipoEvaluacion-Obtener"
                },
                {
                  title: "Catalogo evaluacion agente",
                  icon: "article",
                  path: "/evaluacion_agente",
                  permission: "ReactivoEvaluacion-Obtener"
                }
              ]
            }
          ]
        },
        {
          title: "Organigrama",
          icon: "supervised_user_circle",
          path: "",
          permission: "Organigrama-Obtener",
          items: [
            {
              title: "Tablero de resumen",
              icon: "view_compact",
              path: "/tablerodPersonal",
              permission: "Organigrama-Obtener"
            },
            {
              title: "Tablero de Admón de gerencias y subgerencias",
              icon: "face",
              path: "/admingerencias",
              permission: "Organigrama-Obtener"
            },
            {
              title: "Tablero de Creación o Replica de Personal",
              icon: "perm_contact_calendar",
              path: "/tableroPersonal",
              permission: "Organigrama-Obtener"
            },
            {
              title: "Kits de percepción",
              icon: "receipt",
              path: "/kit",
              permission: "CatalogoKit-Obtener"
            },
            {
              title: "Puestos",
              icon: "work_outline",
              path: "/puesto",
              permission: "CatalogoPuesto-Obtener"
            },
            {
              title: "Clasificación",
              icon: "bookmark_border",
              path: "/clasificacion",
              permission: "CatalogoClasificacion-Obtener"
            }
          ]
        },
        
      ]
    },
    {
      title: "Localizaciones",
      icon: "location_on",
      path: "",
      permission: "Administrativa-Obtener",
      items: [
          {
            title: "Tablero Localizaciones",
            icon: "location_on",
            path: "/localizaciones",
            permission: "TableroLocalizacion-Obtener"
          },
          {
            title: "Tablero Localizacíon Telefonica ",
            icon: "phone",
            path: "/localizacionTelefonica",
            permission: "TableroLocalizacionTel-Obtener"
          },
          {
            title: "Ajustes de parámetros de asignación",
            icon: "settings",
            path: "/ajustesDeParametros",
            permission: "ParametrosAsignacion-Obtener"
          },
          {
            title:"Comisiones",
            icon:"credit_card",
            path:"",
            permissions:"Comisiones-Obtener",
            items: [
              {
                title: "Tablero Comisiones",
                icon:"monetization_on",
                path: "/Comisiones/Tablero",
                permission: "TableroComisiones-Obtener",
    
              },
              {
                title: "Configuración de Parámetros",
                icon:"settings",
                path: "/Comisiones/ConfiguracionParametros",
                permission: "ConfigParametros-Obtener",
              },
            ],
          },
      ]
    },
    {
      title: "Revisión de Cartera",
      icon: "folder",
      path: "",
      permission: "RevisionCartera-Obtener",
      items: [        
        {
          title: "Tablero de Verificaciones",
          icon: "location_on",
          path: "/tableroVerificaciones",
          permission: "TableroVerificaciones-Obtener"
        },
        {
          title: "Tablero Defunción Cárcel",
          icon: "cancel",
          path: "/tableroDefuncionCarcel",
          permission: "TableroDefuncionCarcel-Obtener"
        }
      ]
    },
    {
      title: "Punto de Venta",
      icon: "work",
      path: "/puntoDeVenta",
    },
    {
      title: "Página principal",
      icon: "home",
      path: "/home"
    },
    {
      title: "Salir",
      icon: "power_settings_new",
      path: "/logout"
    }
  ];