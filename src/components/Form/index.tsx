import { zodResolver } from "@hookform/resolvers/zod";
import WarningIcon from '@mui/icons-material/Warning';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as S from "./style";
import fetchData from "../../services";

const PROPERTIES_URL = "https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/propriedades.json";
const LABORATORIES_URL = "https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/laboratorios.json";

type Property = {
  cnpj: string
  id: number
  nome: string
}

type Laboratory = {
  id: number
  nome: string
}

const inputConfigs: any = {
  size: "small",
  variant: "standard",
  color: "primary"
}

const formSchema = z.object({
  nome: z.string().min(1, "Campo obrigatório").max(40, "Limite de caracteres atingido"),
  dataInicial: z.string().min(1, "Campo obrigatório"),
  dataFinal: z.string().min(1, "Campo obrigatório"),
  idPropriedade: z.number().min(1, "Campo obrigatório"),
  idLaboratorio: z.number().min(1, "Campo obrigatório"),
  observacoes: z.string().optional()
})

type FormDataType = z.infer<typeof formSchema>;

export default function Form() {
  const [properties, setProperties] = useState<Property[]>()
  const [laboratories, setLaboratories] = useState<Laboratory[]>()

  const {
    register,
    watch,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FormDataType>({
    resolver: zodResolver(formSchema),
    shouldFocusError: false,
    mode: "onChange",

  })

  const nameLength = watch("nome")?.length || 0;
  const obsLength = watch("observacoes")?.length || 0;

  useEffect(() => {
    fetchData(PROPERTIES_URL).then(setProperties);
    fetchData(LABORATORIES_URL).then(setLaboratories);
  }, [])

  function onSubmit(data: FormDataType) {

    const {
      nome,
      dataInicial,
      dataFinal,
      idLaboratorio,
      idPropriedade,
      observacoes
    } = data;

    const selectedProperty = properties?.find((property) => property.id === idPropriedade);
    const selectedLaboratory = laboratories?.find((laboratory) => laboratory.id === idLaboratorio);

    const payload = {
      nome,
      dataInicial,
      dataFinal,
      infosPropriedade: selectedProperty,
      laboratorio: selectedLaboratory,
      observacoes
    };

    console.log(payload);
  };

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <S.Header
        title="Teste front-end"
        action={
          <S.ActionButton type="submit" variant="text" disableElevation>SALVAR</S.ActionButton>
        }
      />
      <S.Content>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <FormControl fullWidth>
              <TextField
                label="Nome*"
                {...register("nome")}
                {...inputConfigs}
                error={errors.nome}
                inputProps={{
                  maxLength: 40
                }}
              />
              <S.InputHelperWrapper>
                <S.InputHelper error={!!errors.nome}>
                  {
                    errors.nome && (
                      <>
                        <WarningIcon fontSize="small" />
                        <span>{(errors.nome?.message)?.toString()}</span>
                      </>
                    )
                  }
                </S.InputHelper>
                <S.InputHelper>
                  {
                    `${nameLength}/40`
                  }
                </S.InputHelper>
              </S.InputHelperWrapper>
            </FormControl>
          </Grid>
          <Grid item md={3} xs={12}>
            <FormControl fullWidth>
              <TextField
                label="Data Inicial*"
                error={errors.dataInicial}
                {...register("dataInicial")}
                {...inputConfigs}
              />
              <S.InputHelper error={!!errors.dataInicial}>
                {
                  errors.dataInicial && (
                    <>
                      <WarningIcon fontSize="small" />
                      <span>{(errors.dataInicial?.message)?.toString()}</span>
                    </>
                  )
                }
              </S.InputHelper>
            </FormControl>
          </Grid>
          <Grid item md={3} xs={12}>
            <FormControl fullWidth>
              <TextField
                label="Data Final*"
                error={errors.dataFinal}
                {...register("dataFinal")}
                {...inputConfigs}
              />
              <S.InputHelper error={!!errors.dataFinal}>
                {
                  errors.dataFinal && (
                    <>
                      <WarningIcon fontSize="small" />
                      <span>{(errors.dataFinal?.message)?.toString()}</span>
                    </>
                  )
                }
              </S.InputHelper>
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl fullWidth style={{ padding: 0 }}>
              <InputLabel
                id="properties"
                variant="standard"
                error={!!errors.idPropriedade}
                style={{ marginLeft: 0 }}
              >
                Propriedades*
              </InputLabel>
              <Select
                labelId="properties"
                label="Propriedade"
                error={errors.idPropriedade}
                {...register("idPropriedade")}
                {...inputConfigs}
              >
                {
                  properties ? properties.map((property, index) => {
                    return (
                      <MenuItem key={index} value={property.id}>{property.nome}</MenuItem>
                    )
                  }) : <MenuItem>Carregando...</MenuItem>
                }
              </Select>
              <S.InputHelper error={!!errors.idPropriedade}>
                {
                  errors.idPropriedade && (
                    <>
                      <WarningIcon fontSize="small" />
                      <span>{(errors.idPropriedade?.message)?.toString()}</span>
                    </>
                  )
                }
              </S.InputHelper>
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel
                id="laboratory"
                variant="standard"
                error={!!errors.idLaboratorio}
              >
                Laboratório*
              </InputLabel>
              <Select
                labelId="laboratory"
                label="Laboratório"
                error={errors.idLaboratorio}
                {...register("idLaboratorio")}
                {...inputConfigs}
              >
                {
                  laboratories ? laboratories.map((laboratory, index) => {
                    return (
                      <MenuItem key={index} value={laboratory.id}>{laboratory.nome}</MenuItem>
                    )
                  }) : <MenuItem>Carregando...</MenuItem>
                }
              </Select>
              <S.InputHelper error={!!errors.idLaboratorio}>
                {
                  errors.idLaboratorio && (
                    <>
                      <WarningIcon fontSize="small" />
                      <span>{(errors.idLaboratorio?.message)?.toString()}</span>
                    </>
                  )
                }
              </S.InputHelper>
            </FormControl>
          </Grid>
          <Grid item xs={12} >
            <FormControl fullWidth>
              <TextField
                label="Observações"
                error={errors.observacoes}
                multiline
                rows={4}
                {...register("observacoes")}
                {...inputConfigs}
                inputProps={{
                  maxLength: 1000
                }}
              />
              <S.InputHelperWrapper>
                <S.InputHelper error={!!errors.observacoes}>
                  {
                    errors.observacoes && (
                      <>
                        <WarningIcon fontSize="small" />
                        <span>{(errors.observacoes?.message)?.toString()}</span>
                      </>
                    )
                  }
                </S.InputHelper>
                <S.InputHelper>
                  {
                    `${obsLength}/1000`
                  }
                </S.InputHelper>
              </S.InputHelperWrapper>
            </FormControl>
          </Grid>
        </Grid>
      </S.Content>
    </S.Wrapper>
  )
}