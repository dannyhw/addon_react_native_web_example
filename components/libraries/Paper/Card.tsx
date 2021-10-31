import React from 'react';
import {Avatar, Button, Card as PaperCard, Paragraph} from 'react-native-paper';
import {FolderIcon} from '../Svg/FolderIcon';

const LeftContent = (props: any) => (
  <Avatar.Icon {...props} icon={FolderIcon} />
);

interface CardProps {
  title: string;
  content: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const Card = ({title, content, onCancel, onConfirm}: CardProps) => (
  <PaperCard>
    <PaperCard.Title
      title={title}
      subtitle="Card Subtitle"
      left={LeftContent}
    />
    <PaperCard.Content>
      <Paragraph>{content}</Paragraph>
    </PaperCard.Content>
    <PaperCard.Cover source={{uri: 'https://picsum.photos/700'}} />
    <PaperCard.Actions>
      <Button onPress={onCancel}>Cancel</Button>
      <Button onPress={onConfirm}>Ok</Button>
    </PaperCard.Actions>
  </PaperCard>
);
