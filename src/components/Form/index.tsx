import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as S from "./style";
import WarningIcon from '@mui/icons-material/Warning';

const inputConfigs: any = {
  size: "small",
  variant: "standard"
}

const paSchema = z.object({
  nome: z.string({ required_error: "Campo obrigatório" }).min(10, "Campo obrigatório").max(40, "Limite de caracteres atingido"),
  dataInicial: z.string({ required_error: "Campo obrigatório" }),
  dataFinal: z.string({ required_error: "Campo obrigatório" }),
  propriedade: z.string({ required_error: "Campo obrigatório" }),
  laboratorio: z.string({ required_error: "Campo obrigatório" }),
  observacoes: z.string()
})

export default function Form() {

  const {
    register,
    watch,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({
    resolver: zodResolver(paSchema)
  })

  const nameLength = watch("nome")?.length || 0;
  const obsLength = watch("observacoes")?.length || 0;

  const onSubmit = (data: any) => {
    console.log(data)
  }

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
                label="Nome"
                {...register("nome")}
                error={errors.nome}
                inputProps={{
                  maxLength: 40
                }}
                required
                {...inputConfigs}
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
                label="Data Inicial"
                {...register("dataInicial")}
                required
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
                label="Data Final"
                {...register("dataFinal")}
                required
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
                required
                style={{ marginLeft: 0 }}
              >
                Propriedades
              </InputLabel>
              <Select
                labelId="properties"
                label="Propriedade"
                {...register("propriedade")}
                {...inputConfigs}
                defaultValue=''
              >
                <MenuItem value={0}>Teste</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel
                id="laboratory"
                required
              >
                Laboratório
              </InputLabel>
              <Select
                labelId="laboratory"
                label="Laboratório"
                {...register("laboratorio")}
                {...inputConfigs}
                defaultValue=''
              >
                <MenuItem value={0}>Teste</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} >
            <FormControl fullWidth>
              <TextField
                label="Observações"
                {...register("observacoes")}
                {...inputConfigs}
                multiline
                rows={4}
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