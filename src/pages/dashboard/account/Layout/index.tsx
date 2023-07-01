import { Col, Row } from "react-bootstrap"
import { FormControl } from "../../_shared/Form/FormControl/Layout"
import { Header } from "../../_shared/Header/Layout"
import { FormRow } from "../../_shared/Form/FormRow"
import { FormCard } from "../../_shared/Form/FormCard"

export const DashboardAccountLayout = () => {
    return (
        <>
            <Header>
                <Header.Title>Minha conta</Header.Title>
            </Header>
            <FormRow>
                <FormCard md={6}>
                    <FormControl.Root>
                        <FormControl.Label htmlFor="username" required={true}>Nome de usuário</FormControl.Label>
                        <FormControl.Input type="text" id="username" value="danield3v" disabled={true} />
                    </FormControl.Root>
                </FormCard>
                <FormCard md={6}>
                    <FormControl.Root>
                        <FormControl.Label id="email" required={true}>E-mail</FormControl.Label>
                        <FormControl.Input type="email" id="text" value="contatodanielsilvaoficial@gmail.com" disabled={true} />
                    </FormControl.Root>
                </FormCard>
            </FormRow >
            <FormRow>
                <FormCard md={6}>
                    <FormControl.Root>
                        <FormControl.Label htmlFor="password">Senha</FormControl.Label>
                        <FormControl.InputPassword id="password" placeholder="Preencha o campo se for mudar" />
                    </FormControl.Root>
                </FormCard>
                <FormCard md={6} direction="right">
                    <FormControl.Root>
                        <FormControl.Label htmlFor="confirmPassword">Confirmar Senha</FormControl.Label>
                        <FormControl.InputPassword id="confirmPassword" placeholder="Preencha o campo se for mudar" />
                    </FormControl.Root>
                    <FormControl.Button>Alterar senha</FormControl.Button>
                </FormCard>
            </FormRow>
            <FormRow>
                <FormCard md={12} direction="left">
                    <FormControl.Root>
                        <FormControl.Label htmlFor="biography">Biografia</FormControl.Label>
                        <FormControl.Textarea id="biography" placeholder="Exemplo: 🚀 Leinad Shop é uma loja de vendas produtos online totalmente confiável e com toda credibilidade!" />
                        {/* <FormControl.Example>🐰 Que tal contar um pouquinho sobre você, sua loja ou o que preferir? Eu recomendaria... Ops, desculpe-me! Esqueci que essa decisão não cabe a mim, haha! 😉 Mas adoraria ouvir sua história ou detalhes sobre sua loja.</FormControl.Example> */}
                    </FormControl.Root>
                    <FormControl.Button>Salvar Bio</FormControl.Button>
                </FormCard>
            </FormRow>
            {/* <RowCards /> */}
        </>
    )
}