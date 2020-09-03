import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import ItemMercado from '../../components/ItemMercado';

import mercadoImg from '../../assets/mercado.jpeg';

import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';

export default function Mercado(props) {

    const [sairGrupo, setSairGrupo] = useState(false);
    const [comprar, setComprar] = useState(false);
    const [semDinheiro, setSemDinheiro] = useState(false);

    const saldo = 93;

    function comprarItem(preco){
        console.log(saldo, ' ', preco);
        if(saldo >= preco){
            setComprar(true);
        } else {
            setSemDinheiro(true)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header titulo={props.route.name} {...props} />
            <ScrollView style={{ flex: 1 }}>
                <Image source={mercadoImg} style={styles.mercadorImg} />
                <View style={styles.principal}>

                    <Text style={styles.texto}>Bem-vindo ao Mercado! Compre itens fantasticos e equipamentos poderosos. Vejas nosso estoque </Text>
                    <View style={styles.divisor} />

                    <View style={styles.itens}>
                        <ItemMercado preco={200} comprar={comprarItem} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                        <ItemMercado preco={200} comprar={comprarItem} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                        <ItemMercado preco={200} comprar={comprarItem} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                        <ItemMercado preco={200} comprar={comprarItem} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                        <ItemMercado preco={200} comprar={comprarItem} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                        <ItemMercado preco={200} comprar={comprarItem} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                        <ItemMercado preco={200} comprar={comprarItem} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                        <ItemMercado preco={0} comprar={comprarItem} img={'https://scontent.fcxj11-1.fna.fbcdn.net/v/t1.0-9/31944315_2032828603413598_3681826792844296192_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=7p-oNH_rp7gAX_-fAd4&_nc_ht=scontent.fcxj11-1.fna&oh=8b9bf84af22d23a58ec3370198872ec4&oe=5F72E32F'} />
                    </View>
                </View>
            </ScrollView>

            <Modal
				animationType="fade"
				transparent={true}
				visible={comprar}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>

						<TouchableOpacity
							style={styles.botaoFecharModal}
							onPress={() => setComprar(!comprar)}
						>
							<Icon name='close' size={20} style={styles.textStyle} />
						</TouchableOpacity>

						<Text style={styles.subtitulo}>Comprar Item</Text>

						<TouchableOpacity
							style={{ ...styles.botaoModal }}
							onPress={() => setComprar(!comprar)}
						>
							<Text style={styles.textStyle}>Comprar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>

            <Modal
				animationType="fade"
				transparent={true}
				visible={semDinheiro}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>

						<TouchableOpacity
							style={styles.botaoFecharModal}
							onPress={() => setSemDinheiro(!semDinheiro)}
						>
							<Icon name='close' size={20} style={styles.textStyle} />
						</TouchableOpacity>

						<Text style={styles.subtitulo}>Dinheiro Insuficiente</Text>
                        <Text style={styles.texto}>
                            Faça mais atividades e missões
                            para receber mais recompensas
                        </Text>
					</View>
				</View>
			</Modal>
            
        </SafeAreaView>
    );
}