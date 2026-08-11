import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';

const produtosVendedor = [
  {
    id: '101',
    dataEnvio: '05/08/2026 - 15:00',
    produtos: 'Cosméticos (3 itens)',
    destinatario: 'Maria ',
    status: 'Em Trânsito',
    statusCor: '#d97706',
    statusBg: 'rgba(217, 119, 6, 0.15)',
    entregador: 'Lucas (Bike)',
  },
  {
    id: '102',
    dataEnvio: '05/08/2026 - 13:20',
    produtos: '2x Roupas',
    destinatario: 'Carlos ',
    status: 'Entregue',
    statusCor: '#16a34a',
    statusBg: 'rgba(22, 163, 74, 0.15)',
    entregador: 'Ana  (E-Bike)',
  },
  {
    id: '103',
    dataEnvio: '05/08/2026 - 10:00',
    produtos: '1x  Cerâmica',
    destinatario: 'Fernanda ',
    status: 'Aguardando Coleta',
    statusCor: '#2563eb',
    statusBg: 'rgba(37, 99, 235, 0.15)',
    entregador: 'Pendente de Atribuição',
  },
];

export default function HistoricoVendedor() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.headerCard}>
        <Text style={styles.nomeProduto}>{item.produtos}</Text>
        <View style={[styles.badgeStatus, { backgroundColor: item.statusBg }]}>
          <Text style={[styles.textoStatus, { color: item.statusCor }]}>{item.status}</Text>
        </View>
      </View>

      <Text style={styles.data}>Postado em: {item.dataEnvio}</Text>
      <Text style={styles.textoDetalhe}>
        <Text style={styles.negrito}>Cliente:</Text> {item.destinatario}
      </Text>
      <Text style={styles.textoDetalhe}>
        <Text style={styles.negrito}>Entregador:</Text> {item.entregador}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico de Envios</Text>
      <FlatList
        data={produtosVendedor}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}