import { Grid } from "@alfalab/core-components/grid";
import { Typography } from "@alfalab/core-components/typography";
import { Page } from "../../components/page";
import styles from './index.module.css';

export const Main = () => {
  return (
    <Page isPageMain={true}>
      <Grid.Row gutter={0}>
        <Grid.Col width={{ mobile: 12, tablet: 12, desktop: 6 }}>
          <a href="/made" className={styles.link}>
            <div className={styles.pageImageWrapper}>
              <Typography.TitleResponsive className={styles.text} tag="div" view='medium' color="primary" weight="bold">
                Сделано в Альфе
              </Typography.TitleResponsive>
            </div>
          </a>
        </Grid.Col>
        <Grid.Col width={{ mobile: 12, tablet: 12, desktop: 6 }}>
          <a href="/design" className={styles.link}>
            <div className={styles.pageImageWrapperRight}>
              <Typography.TitleResponsive className={styles.text} tag="div" view='medium' color="primary" weight="bold">
                Свой дизайн
              </Typography.TitleResponsive>
            </div>
          </a>
        </Grid.Col>
      </Grid.Row>
    </Page>
  );
}
